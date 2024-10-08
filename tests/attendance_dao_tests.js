// SPDX-License-Identifier: MIT
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AttendanceDAO", function () {
    let AttendanceDAO;
    let attendanceDAO;
    let owner;
    let teacher;
    let student1;
    let student2;
    let student3;

    before(async function () {
        // Get the signers
        [owner, teacher, student1, student2, student3] = await ethers.getSigners();

        // Deploy the AttendanceDAO contract
        const RBAC = await ethers.getContractFactory("RBAC"); // Assuming RBAC contract is defined
        const rbac = await RBAC.deploy();
        await rbac.deployed();

        AttendanceDAO = await ethers.getContractFactory("AttendanceDAO");
        attendanceDAO = await AttendanceDAO.deploy();
        await attendanceDAO.deployed();

        // Grant teacher role to the teacher address in RBAC (assuming you have a method for this)
        await rbac.grantRole(ethers.utils.id("TEACHER_ROLE"), teacher.address);
    });

    describe("Course Management", function () {
        it("should add a course", async function () {
            await attendanceDAO.connect(teacher).addCourse("Math 101");
            const courses = await attendanceDAO.getAllCourses();
            expect(courses).to.include("Math 101");
        });

        it("should not allow adding the same course twice", async function () {
            await attendanceDAO.connect(teacher).addCourse("Science 101");
            await expect(attendanceDAO.connect(teacher).addCourse("Science 101")).to.be.revertedWith("Course already exists");
        });
    });

    describe("Attendance Form Management", function () {
        before(async function () {
            // Add a course before creating an attendance form
            await attendanceDAO.connect(teacher).addCourse("Math 101");
        });

        it("should create an attendance form", async function () {
            await attendanceDAO.connect(teacher).createAttendanceForm("Math 101", [student1.address, student2.address]);
            const forms = await attendanceDAO.getAttendanceFormsByTeacher(teacher.address);
            expect(forms.length).to.equal(1);
        });

        it("should not allow students to create attendance forms", async function () {
            await expect(attendanceDAO.connect(student1).createAttendanceForm("Math 101", [student1.address])).to.be.revertedWith("Only teachers can perform this action");
        });
    });

    describe("Voting on Attendance", function () {
        let formIndex;

        before(async function () {
            // Create an attendance form for voting
            await attendanceDAO.connect(teacher).createAttendanceForm("Math 101", [student1.address, student2.address, student3.address]);
            formIndex = 0; // Assuming this is the first form
        });

        it("should allow students to vote on their attendance", async function () {
            await attendanceDAO.connect(student1).answerAttendanceForm(formIndex, [true]); // Student 1 is present
            await attendanceDAO.connect(student2).answerAttendanceForm(formIndex, [false]); // Student 2 is absent
            await attendanceDAO.connect(student3).answerAttendanceForm(formIndex, [true]); // Student 3 is present

            const forms = await attendanceDAO.getAttendanceFormsByStudent(student1.address);
            expect(forms[0].votes[0]).to.deep.equal([true]);
        });

        it("should calculate attendance results", async function () {
            await attendanceDAO.connect(teacher).calculateAttendanceResult(formIndex);
            const results = await attendanceDAO.getAllAttendanceResults();
            expect(results.length).to.equal(1);
            expect(results[0].finalResult).to.deep.equal([true, false, true]);
        });

        it("should not allow a student to vote more than once", async function () {
            await expect(attendanceDAO.connect(student1).answerAttendanceForm(formIndex, [true])).to.be.revertedWith("You have already voted for this form");
        });
    });
});
