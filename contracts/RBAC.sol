// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RBAC {
    // Owner of the contract
    address public immutable owner;

    // List of teacher addresses
    mapping(address => bool) public teachers;

    // Events for tracking teacher addition/removal
    event TeacherAdded(address indexed teacher);
    event TeacherRemoved(address indexed teacher);

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
        addTeacher(msg.sender); // Owner is automatically a teacher
    }

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    // Modifier to restrict access to teachers
    modifier onlyTeachers() {
        require(teachers[msg.sender], "Only teachers can perform this action");
        _;
    }

    // Function to add a teacher address (can only be called by the owner)
    function addTeacher(address _teacher) public onlyOwner {
        require(!teachers[_teacher], "Address is already a teacher"); // Check if already a teacher
        teachers[_teacher] = true;
        emit TeacherAdded(_teacher); // Emit event on addition
    }

    // Function to remove a teacher address (can only be called by the owner)
    function removeTeacher(address _teacher) public onlyOwner {
        require(_teacher != owner, "Owner cannot be removed as a teacher");
        teachers[_teacher] = false;
        emit TeacherRemoved(_teacher); // Emit event on removal
    }
}
