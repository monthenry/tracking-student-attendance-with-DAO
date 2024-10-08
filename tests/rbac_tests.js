// Import the necessary libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RBAC Contract", function () {
    let RBAC;
    let rbac;
    let owner;
    let teacher1;
    let teacher2;

    beforeEach(async function () {
        // Get the contract factory and deploy the contract
        RBAC = await ethers.getContractFactory("RBAC");
        [owner, teacher1, teacher2] = await ethers.getSigners();
        rbac = await RBAC.deploy();
        await rbac.deployed();
    });

    describe("Deployment", function () {
        it("Should set the correct owner", async function () {
            expect(await rbac.owner()).to.equal(owner.address);
        });

        it("Should add the owner as a teacher", async function () {
            expect(await rbac.teachers(owner.address)).to.equal(true);
        });
    });

    describe("Teacher Management", function () {
        it("Should allow the owner to add a teacher", async function () {
            await rbac.addTeacher(teacher1.address);
            expect(await rbac.teachers(teacher1.address)).to.equal(true);
        });

        it("Should emit an event when a teacher is added", async function () {
            await expect(rbac.addTeacher(teacher1.address))
                .to.emit(rbac, "TeacherAdded")
                .withArgs(teacher1.address);
        });

        it("Should not allow the same teacher to be added twice", async function () {
            await rbac.addTeacher(teacher1.address);
            await expect(rbac.addTeacher(teacher1.address)).to.be.revertedWith("Address is already a teacher");
        });

        it("Should allow the owner to remove a teacher", async function () {
            await rbac.addTeacher(teacher1.address);
            await rbac.removeTeacher(teacher1.address);
            expect(await rbac.teachers(teacher1.address)).to.equal(false);
        });

        it("Should emit an event when a teacher is removed", async function () {
            await rbac.addTeacher(teacher1.address);
            await expect(rbac.removeTeacher(teacher1.address))
                .to.emit(rbac, "TeacherRemoved")
                .withArgs(teacher1.address);
        });

        it("Should not allow the owner to be removed as a teacher", async function () {
            await expect(rbac.removeTeacher(owner.address)).to.be.revertedWith("Owner cannot be removed as a teacher");
        });

        it("Should not allow non-owners to add a teacher", async function () {
            await expect(rbac.connect(teacher1).addTeacher(teacher2.address)).to.be.revertedWith("Only the contract owner can perform this action");
        });

        it("Should not allow non-owners to remove a teacher", async function () {
            await rbac.addTeacher(teacher1.address);
            await expect(rbac.connect(teacher1).removeTeacher(teacher2.address)).to.be.revertedWith("Only the contract owner can perform this action");
        });
    });

    describe("Access Control", function () {
        it("Should restrict access to teachers", async function () {
            await expect(rbac.connect(teacher2).addTeacher(teacher1.address)).to.be.revertedWith("Only the contract owner can perform this action");
        });
    });
});
