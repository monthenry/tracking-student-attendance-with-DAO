// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RBAC.sol";

contract AttendanceDAO {
    // Role based access control contract
    RBAC public accessControl;

    // Mapping for courses to improve efficiency
    mapping(string => bool) public courseExistsMap;

    // List of courses addresses
    string[] public courses;

    // Struct to store attendance form details
    struct AttendanceForm {
        uint256 index;  // Store the original index
        bool isActive;
        string courseName;
        uint256 courseDate;
        address teacher;
        address[] students;
        bool[][] votes;
    }

    // Struct to store final attendance results
    struct AttendanceResult {
        string courseName;
        uint256 courseDate; // Datetime at which the form was created
        address teacher;
        address[] students; // List of students for the form
        bool[] finalResult; // List of booleans to store students' attendance status
    }

    // List to store attendance forms
    uint256 public numForms;
    AttendanceForm[] public attendanceForms;

    // List to store final attendance results
    uint256 public numResults;
    AttendanceResult[] public attendanceResults;

    // Events for critical actions
    event CourseAdded(string course);
    event AttendanceFormCreated(uint256 indexed formIndex, string courseName);
    event AttendanceResultCalculated(uint256 indexed resultIndex);

    /*
    ----------------------CONSTRUCTOR--------------------------------------------------------------
    */

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == accessControl.owner(), "Only the contract owner can perform this action");
        _;
    }

    // Modifier to restrict access to teachers
    modifier onlyTeachers() {
        require(accessControl.teachers(msg.sender), "Only teachers can perform this action");
        _;
    }

    // Constructor to set the owner and initialize role-based access control
    constructor() {
        numForms = 0;
        numResults = 0;
        accessControl = new RBAC();
    }

    /*
    ----------------------CORE FUNCTIONS------------------------------------------------------------
    */

    // Function to add a course (can only be called by teachers)
    function addCourse(string memory _course) public onlyTeachers {
        require(!courseExistsMap[_course], "Course already exists");
        courses.push(_course);
        courseExistsMap[_course] = true; // Mark the course as existing
        emit CourseAdded(_course); // Emit event
    }

    // Function to get the list of all courses
    function getAllCourses() external view returns (string[] memory) {
        return courses;
    }

    // Function for teachers to create and post an attendance form
    function createAttendanceForm(
        string memory _courseName,
        address[] memory _students
    ) external onlyTeachers returns (uint256) {
        // Create a new attendance form without initializing the inner list
        AttendanceForm memory newForm = AttendanceForm({
            index: numForms,
            isActive: true,
            courseName: _courseName,
            courseDate: block.timestamp,
            teacher: msg.sender,
            students: _students,
            votes: new bool[][](_students.length)
        });

        // Add the form to the list of attendance forms
        attendanceForms.push(newForm);

        // Increment the number of forms
        numForms++;

        emit AttendanceFormCreated(numForms - 1, _courseName); // Emit event
        return numForms - 1;
    }

    // Function to calculate and store final attendance results
    function calculateAttendanceResult(uint256 _formIndex) external returns (uint256) {
        // Ensure the form index is valid
        require(_formIndex < numForms, "Invalid form index");

        // Get the attendance form
        AttendanceForm storage form = attendanceForms[_formIndex];
        uint256 numStudents = form.students.length;

        // Ensure the form can only be closed by the teacher opening it
        require(msg.sender == form.teacher, "The form can only be closed by its creator");

        // Create a new attendanceResult
        AttendanceResult memory newResult = AttendanceResult({
            courseName: form.courseName,
            courseDate: form.courseDate,
            teacher: form.teacher,
            students: form.students,
            finalResult: new bool[](numStudents) // Initialize with the correct size
        });

        // Calculate final results
        for (uint256 i = 0; i < numStudents; i++) {
            // Check if the student has voted, otherwise declared as absent
            if (form.votes[i].length <= 0) {
                newResult.finalResult[i] = false;
                continue;
            }

            // Count votes
            uint256 numVotes = 0;
            uint256 presentCount = 0;
            for (uint256 j = 0; j < numStudents; j++) {
                if (form.votes[j].length > 0) {
                    numVotes++;
                    if (form.votes[j][i]) {
                        presentCount++;
                    }
                }
            }

            // Check if the student is present based on the majority rules
            newResult.finalResult[i] = (numVotes > 0 && (presentCount * 100) / numVotes >= 51);
        }

        // Add the form to the list of result forms
        attendanceResults.push(newResult);
        // Increment the number of results
        numResults++;

        // Delete the form from the list
        form.isActive = false;

        emit AttendanceResultCalculated(numResults - 1); // Emit event
        return numResults - 1;
    }

    function isTeacher(address _address) public view returns (bool) {
        return accessControl.teachers(_address);
    }

    // Helper function to check if an address is a student in a given list
    function isStudent(address _student, address[] memory _students) internal pure returns (bool) {
        for (uint256 i = 0; i < _students.length; i++) {
            if (_student == _students[i]) {
                return true;
            }
        }
        return false;
    }

    // Function for students to answer the attendance form
    function answerAttendanceForm(uint256 _formIndex, bool[] memory _isPresent) external {
        // Ensure the form index is valid
        require(_formIndex < numForms, "Invalid form index");

        // Get the attendance form
        AttendanceForm storage form = attendanceForms[_formIndex];

        // Check that the form is still active
        require(form.isActive, "The form has already been closed");

        // Check if the sender is a valid student in the form
        require(isStudent(msg.sender, form.students), "You are not a valid student for this form");

        // Check if the number of provided answers matches the number of students
        require(_isPresent.length == form.students.length, "Invalid number of answers");

        // Find the index of the student in the form
        uint256 studentIndex;
        for (uint256 i = 0; i < form.students.length; i++) {
            if (form.students[i] == msg.sender) {
                studentIndex = i;
                break;
            }
        }

        // Check if the student has not voted already
        require(!(form.votes[studentIndex].length > 0), "You have already voted for this form");

        // Add the student's vote at the right index
        form.votes[studentIndex] = _isPresent;
    }

    // Helper function to check if the student has voted for a specific form
    function hasVoted(address _student, uint256 _formIndex) internal view returns (bool) {
        AttendanceForm storage form = attendanceForms[_formIndex];

        for (uint256 j = 0; j < form.students.length; j++) {
            if (form.students[j] == _student && form.votes[j].length > 0) {
                return true;
            }
        }

        return false;
    }

    // Function to get attendance forms by student
    function getAttendanceFormsByStudent(address _student) external view returns (AttendanceForm[] memory) {
        AttendanceForm[] memory studentForms = new AttendanceForm[](numForms);

        uint256 count = 0;
        for (uint256 i = 0; i < numForms; i++) {
            // Check if the student is part of the form, the form is active, and the student hasn't voted
            if (isStudent(_student, attendanceForms[i].students) && attendanceForms[i].isActive && !hasVoted(_student, i)) {
                // Student is part of the form, the form is active, and the student hasn't voted,
                // add it to the result array
                studentForms[count] = attendanceForms[i];
                count++;
            }
        }

        // Resize the memory array to fit only the relevant forms
        assembly {
            mstore(studentForms, count)
        }

        return studentForms;
    }

    // Function to get attendance forms by teacher
    function getAttendanceFormsByTeacher(address _teacher) external view returns (AttendanceForm[] memory) {
        AttendanceForm[] memory teacherForms = new AttendanceForm[](numForms);

        uint256 count = 0;
        for (uint256 i = 0; i < numForms; i++) {
            if (attendanceForms[i].teacher == _teacher && attendanceForms[i].isActive) {
                // Teacher matches, add the form to the result array
                teacherForms[count] = attendanceForms[i];
                count++;
            }
        }

        // Resize the memory array to fit only the relevant forms
        assembly {
            mstore(teacherForms, count)
        }

        return teacherForms;
    }

    // Function to get attendance results by course
    function getAttendanceResultsByCourse(string memory _course) external view returns (AttendanceResult[] memory) {
        AttendanceResult[] memory courseResults = new AttendanceResult[](numResults);

        uint256 count = 0;
        for (uint256 i = 0; i < numResults; i++) {
            if (keccak256(abi.encodePacked(attendanceResults[i].courseName)) == keccak256(abi.encodePacked(_course))) {
                // Course matches, add the result to the result array
                courseResults[count] = attendanceResults[i];
                count++;
            }
        }

        // Resize the memory array to fit only the relevant results
        assembly {
            mstore(courseResults, count)
        }

        return courseResults;
    }

    // Function to get all attendance results
    function getAllAttendanceResults() external view returns (AttendanceResult[] memory) {
        return attendanceResults;
    }
}
