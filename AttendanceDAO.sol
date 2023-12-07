// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AttendanceDAO {
    // Owner of the contract
    address public immutable owner;

    // List of teacher addresses
    address[] public teachers;

    // Struct to store attendance form details
    struct AttendanceForm {
        string courseName;
        uint256 courseDate; // Datetime at which the form was created
        address teacher;
        address[] students; // List of students for the form
        bool[][] votes; // List of lists containing booleans to store students' votes
    }

    // Struct to store final attendance results
    struct AttendanceResult {
        string courseName;
        uint256 courseDate; // Datetime at which the form was created
        address teacher;
        address[] students; // List of students for the form
        bool[] finalResult; // List of lists containing booleans to store students' votes
    }

    // List to store attendance forms
    uint numForms;
    AttendanceForm[] public attendanceForms;

    // List to store final attendance results
    uint numResults;
    AttendanceResult[] public attendanceResults;

    /*
    ----------------------CONSTRUCTOR--------------------------------------------------------------
    */

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    // Modifier to restrict access to teachers
    modifier onlyTeachers() {
        require(isTeacher(msg.sender), "Only teachers can perform this action");
        _;
    }

    // Function to add a teacher address (can only be called by the owner)
    function addTeacher(address _teacher) public onlyOwner {
        teachers.push(_teacher);
    }

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
        addTeacher(0x59Ede2165427c69d778D110C7f0cdf55418b4804);
    }

    /*
    ----------------------CODE TO TEST--------------------------------------------------------------
    */

    // Function for teachers to create and post an attendance form
    function createAttendanceForm(
        string memory _courseName,
        address[] memory _students
    ) external onlyTeachers returns (uint256) {
        // Create a new attendance form without initializing the inner list
        AttendanceForm memory newForm = AttendanceForm({
            courseName: _courseName,
            courseDate: block.timestamp,
            teacher: msg.sender,
            students: _students,
            votes: new bool[][](0)
        });

        // Get the index at which the form will be inserted
        uint256 formIndex = attendanceForms.length;

        // Add the form to the list of attendance forms
        attendanceForms.push(newForm);

        return formIndex;
    }

    // Function to calculate and store final attendance results
    function calculateAttendanceResult(uint256 _formIndex) external {
        // Ensure the form index is valid
        require(_formIndex < attendanceForms.length, "Invalid form index");

        // Get the attendance form
        AttendanceForm storage form = attendanceForms[_formIndex];
        AttendanceResult memory newResult = AttendanceResult({
            courseName: form.courseName,
            courseDate: form.courseDate,
            teacher: form.teacher,
            students: form.students,
            finalResult: new bool[](0)
        });

        // Calculate final results
        for (uint256 i = 0; i < form.students.length; i++) {
            uint256 presentCount;
            uint256 absentCount;

            // Count votes
            for (uint256 j = 0; j < form.votes.length; j++) {
                if (form.votes[j][i]) {
                    presentCount++;
                } else {
                    absentCount++;
                }
            }

            // Check if the student is present based on the rules
            if (presentCount >= form.votes.length * 75 / 100) {
                newResult.finalResult[i] = true;
            } else if (absentCount > form.votes.length * 5 / 100) {
                newResult.finalResult[i] = false;
            }
        }

        attendanceResults.push(newResult);
    }

    // Helper function to check if an address is a teacher
    function isTeacher(address _address) internal view returns (bool) {
        for (uint256 i = 0; i < teachers.length; i++) {
            if (_address == teachers[i]) {
                return true;
            }
        }
        return false;
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
        require(_formIndex < attendanceForms.length, "Invalid form index");

        // Get the attendance form
        AttendanceForm storage form = attendanceForms[_formIndex];

        // Check if the number of provided answers matches the number of students
        require(_isPresent.length == form.students.length, "Invalid number of answers");

        // Add the student's vote
        form.votes.push(_isPresent);
    }

    // Function to view attendance statistics
    function viewAttendanceStatistics(uint256 _resultIndex, address _viewer) external view returns (bool[] memory) {
        // Ensure the form index is valid
        require(_resultIndex < attendanceResults.length, "Invalid form index");

        // Get the attendance form
        AttendanceResult storage result = attendanceResults[_resultIndex];

        // Only the teacher, students of that class, or members of the administration can view statistics
        require(
            isTeacher(_viewer) || isStudent(_viewer, result.students),
            "You don't have permission to view statistics"
        );

        // Return the final results
        return result.finalResult;
    }

    // Function to display all attendance forms
    function getAllAttendanceForms() external view returns (AttendanceForm[] memory) {
        return attendanceForms;
    }
}