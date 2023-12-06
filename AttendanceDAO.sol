// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AttendanceDAO {

    // Struct to store attendance form details
    struct AttendanceForm {
        string courseName;
        address teacher;
        uint256 datetime;
        uint256 duration; // Duration in hours
        address[] students; // List of students for the form
        bool[][] votes; // List of lists containing booleans to store students' votes
    }

    // Struct to store final attendance results
    struct AttendanceResult {
        string courseName;
        address teacher;
        uint256 datetime;
        uint256 duration; // Duration in hours
        address[] students; // List of students for the form
        bool[] finalResult; // List of lists containing booleans to store students' votes
    }

    // List to store attendance forms
    uint numForms;
    AttendanceForm[] public attendanceForms;

    // List to store final attendance results
    uint numResults;
    AttendanceResult[] public attendanceResults;

    // List of teacher addresses
    address[] public teachers;

    /*
    ----------------------CODE TO TEST--------------------------------------------------------------
    */

    // Function for teachers to create and post an attendance form
    function createAttendanceForm(
        string memory _courseName,
        uint256 _datetime,
        uint256 _duration,
        address[] memory _students
    ) external {
        // Only teachers can create attendance forms
        require(isTeacher(msg.sender), "Only teachers can create attendance forms");

        // Create a new attendance form without initializing the inner list
        AttendanceForm memory newForm = AttendanceForm({
            courseName: _courseName,
            teacher: msg.sender,
            datetime: _datetime,
            duration: _duration,
            students: _students,
            votes: new bool[][](0)
        });

        // Add the form to the list of attendance forms
        attendanceForms.push(newForm);
    }

    // Function to calculate and store final attendance results
    function calculateAttendanceResult(uint256 _formIndex) external {
        // Ensure the form index is valid
        require(_formIndex < attendanceForms.length, "Invalid form index");

        // Get the attendance form
        AttendanceForm storage form = attendanceForms[_formIndex];
        AttendanceResult memory newResult = AttendanceResult({
            courseName: form.courseName,
            teacher: form.teacher,
            datetime: form.datetime,
            duration: form.duration,
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

        // Ensure the current time is within the form's duration
        require(block.timestamp >= form.datetime && block.timestamp <= form.datetime + form.duration * 1 hours, "Attendance form not active");

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
}