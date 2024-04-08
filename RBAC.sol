// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RBAC {
    // Owner of the contract
    address public immutable owner;

    // List of teacher addresses
    mapping(address => bool) public teachers;

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
        teachers[_teacher] = true;
    }

    // Function to remove a teacher address (can only be called by the owner)
    function removeTeacher(address _teacher) public onlyOwner {
        require(_teacher != owner, "Owner cannot be removed as a teacher");
        teachers[_teacher] = false;
    }
}