// Config contract information
const contractAddress = "0xdA11A1A2eA57046443208870f159E7F6a4778614";
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_course",
				"type": "string"
			}
		],
		"name": "addCourse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teacher",
				"type": "address"
			}
		],
		"name": "addTeacher",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_formIndex",
				"type": "uint256"
			},
			{
				"internalType": "bool[]",
				"name": "_isPresent",
				"type": "bool[]"
			}
		],
		"name": "answerAttendanceForm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "attendanceForms",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "courseDate",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "teacher",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "attendanceResults",
		"outputs": [
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "courseDate",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "teacher",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_formIndex",
				"type": "uint256"
			}
		],
		"name": "calculateAttendanceResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "courses",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_students",
				"type": "address[]"
			}
		],
		"name": "createAttendanceForm",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAttendanceForms",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "courseDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "teacher",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "students",
						"type": "address[]"
					},
					{
						"internalType": "bool[][]",
						"name": "votes",
						"type": "bool[][]"
					}
				],
				"internalType": "struct AttendanceDAO.AttendanceForm[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAttendanceResults",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "courseDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "teacher",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "students",
						"type": "address[]"
					},
					{
						"internalType": "bool[]",
						"name": "finalResult",
						"type": "bool[]"
					}
				],
				"internalType": "struct AttendanceDAO.AttendanceResult[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCourses",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			}
		],
		"name": "getAttendanceFormsByStudent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "courseDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "teacher",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "students",
						"type": "address[]"
					},
					{
						"internalType": "bool[][]",
						"name": "votes",
						"type": "bool[][]"
					}
				],
				"internalType": "struct AttendanceDAO.AttendanceForm[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teacher",
				"type": "address"
			}
		],
		"name": "getAttendanceFormsByTeacher",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "courseDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "teacher",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "students",
						"type": "address[]"
					},
					{
						"internalType": "bool[][]",
						"name": "votes",
						"type": "bool[][]"
					}
				],
				"internalType": "struct AttendanceDAO.AttendanceForm[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			}
		],
		"name": "getAttendanceResultsByCourse",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "courseDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "teacher",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "students",
						"type": "address[]"
					},
					{
						"internalType": "bool[]",
						"name": "finalResult",
						"type": "bool[]"
					}
				],
				"internalType": "struct AttendanceDAO.AttendanceResult[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teachers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

/*
------------------------------CODE TO TEST-------------------------------------------
*/

var contract = null;
var accounts = null;
var currentAccount = null;

document.addEventListener('DOMContentLoaded', async () => {
    // Connect to your smart contract
    // Initialize web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(Ganache.provider());
        // console.log
    } else {
        web3  = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545/")); //for events
    }
    // web3.eth.defaultAccount = "0x175B72d85c0AecfE5069397094B46D330d15A74A";

    contract = new web3.eth.Contract(contractABI, contractAddress);

	accounts = await web3.eth.getAccounts();
	currentAccount = accounts[0];

	// Display current wallet address
    document.getElementById('walletAddress').innerText = currentAccount;
    
    // Load teacher's forms on page load
    loadTeacherForms();
	loadCourses();
});

// Example JavaScript function to add a course
async function addCourse() {
	// Get the course name from the input field
	const courseName = document.getElementById('courseNameInput').value;

	// Ensure the course name is not empty
	if (!courseName) {
		alert('Please enter a valid course name');
		return;
	}

	// Call the smart contract function to add the course
	await contract.methods.addCourse(courseName).send({ from: currentAccount });

	// Reload the course list after adding a new course
	loadCourses();
}

// Function to load courses into the dropdown
async function loadCourses(targetDropdownId) {
    const courseSelect = document.getElementById('courseSelect1');
    const courseSelect2 = document.getElementById('courseSelect2');

    const courses = await contract.methods.getAllCourses().call();

    // Clear previous entries
    courseSelect.innerHTML = '<option value="" selected disabled hidden>Select a course</option>';
    courseSelect2.innerHTML = '<option value="" selected disabled hidden>Select a course</option>';

    // Add courses to both dropdowns
    for (const course of courses) {
        const option = document.createElement('option');
        option.value = course;
        option.text = course;

        courseSelect.appendChild(option);
        courseSelect2.appendChild(option.cloneNode(true));
    }
}

// Function to load teacher's forms into the dropdown
async function loadTeacherForms() {
    const teacherForms = await contract.methods.getAttendanceFormsByTeacher(currentAccount).call();
    const formSelect = document.getElementById('formSelect');

    // Clear previous options
    formSelect.innerHTML = '<option value="" selected disabled hidden>Select a form</option>';

    // Add new options
    teacherForms.forEach((form) => {
        const option = document.createElement('option');
        option.value = form.index.toString();
        option.text = `${form.courseName} - ${new Date(form.courseDate * 1000).toLocaleString()}`;
        formSelect.add(option);
    });

    // Display details of the selected form
    displayFormDetails();
}

// Function to display details of the selected form
async function displayFormDetails() {
    const formSelect = document.getElementById('formSelect');
    const selectedIndex = formSelect.value;
    const formDetailsDiv = document.getElementById('formDetails');
    
    if (selectedIndex) {
        const teacherForms = await contract.methods.getAttendanceFormsByTeacher(currentAccount).call();
        let selectedForm;

		// Loop through the forms to find the one with the right index
		for (const form of teacherForms) {
			if (form.index.toString() === selectedIndex) {
				selectedForm = form;
				break;
			}
		}

        // Display form details
        formDetailsDiv.innerHTML = `
            <p><strong>Course Name:</strong> ${selectedForm.courseName}</p>
            <p><strong>Course Date:</strong> ${new Date(selectedForm.courseDate * 1000).toLocaleString()}</p>
            <p><strong>Students:</strong> ${selectedForm.students.join(', ')}</p>
        `;
    } else {
        formDetailsDiv.innerHTML = 'No form selected.'; // Clear details if no form is selected
    }
    
}

// Function to create a new form
async function createNewForm() {
    const courseName = document.getElementById('courseSelect1').value;
    const students = document.getElementById('students').value.split(',').map(addr => addr.trim());

    if (!courseName || students.length === 0) {
        alert('Please enter valid course name and students');
        return;
    }

    await contract.methods.createAttendanceForm(courseName, students).send({ from: currentAccount, gas: 2000000 });

    // Reload teacher's forms after creating a new one
    loadTeacherForms();
}

// Function to close the selected form by calculating attendance result
async function calculateAttendanceResult() {
    const formSelect = document.getElementById('formSelect');
    const selectedIndex = formSelect.value;

    if (selectedIndex >= 0) {
        const teacherForms = await contract.methods.getAttendanceFormsByTeacher(currentAccount).call();
        const selectedForm = teacherForms[selectedIndex];

        await contract.methods.calculateAttendanceResult(selectedIndex).send({ from: currentAccount, gas: 2000000 });

        // Reload teacher's forms after closing the form
        loadTeacherForms();
    }
}

async function displayAttendanceByCourse() {
    const courseSelect = document.getElementById('courseSelect2');
    const selectedCourse = courseSelect.value;

    const attendanceResults = await contract.methods.getAttendanceResultsByCourse(selectedCourse).call();

    const attendanceTable = document.getElementById('attendanceTable');
    attendanceTable.innerHTML = ''; // Clear previous table

    if (!attendanceResults || attendanceResults.length === 0) {
        attendanceTable.innerHTML = 'No attendance yet.';
        return;
    }

	// Add border styling to the table
    attendanceTable.style.border = '1px solid black';
    attendanceTable.style.borderCollapse = 'collapse';

    // Create table headers
    const headerRow = attendanceTable.insertRow();
    const dateHeader = headerRow.insertCell(0);
    dateHeader.innerHTML = '<b>Student</b>'; // Header for the first column

    // Add dates to headers
    attendanceResults.forEach(result => {
        const dateCell = headerRow.insertCell(headerRow.cells.length);
        const formattedDate = new Date(result.courseDate * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        dateCell.innerHTML = `<b>${formattedDate}</b>`;
		dateCell.style.border = '1px solid black';
    });

    // Populate attendance data
    attendanceResults[0].students.forEach((student, studentIndex) => {
        const row = attendanceTable.insertRow();
        const studentCell = row.insertCell(0);
        studentCell.innerHTML = `<b>${student}</b>`;
		studentCell.style.border = '1px solid black';

        // Add student attendances
        attendanceResults.forEach(result => {
            const attendanceCell = row.insertCell(row.cells.length);
            attendanceCell.innerHTML = result.finalResult[studentIndex] ? 'Present' : 'Absent';
			attendanceCell.style.border = '1px solid black';
        });
    });
}
