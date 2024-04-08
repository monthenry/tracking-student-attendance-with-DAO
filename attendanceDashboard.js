// Config contract information
const contractAddress = "0xB7188dAc23488c8Ddc3B43CB53B496C99747560F";
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "accessControl",
		"outputs": [
			{
				"internalType": "contract RoleBasedAccessControl",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isTeacher",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

/*------------------------------------- CODE ----------------------------*/
var contract = null;
var accounts = null;
var accountId = null;
var currentAccount = null;
var isTeacher = null;

document.addEventListener('DOMContentLoaded', async () => {
    getLoginInformation();
    
    // Connect to your smart contract
    // Initialize web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(Ganache.provider());
    } else {
        web3  = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545/")); //for events
    }

    contract = new web3.eth.Contract(contractABI, contractAddress);

	accounts = await web3.eth.getAccounts();
	currentAccount = accounts[accountId];
    
    isTeacher = await checkIfTeacher(currentAccount);
    if (isTeacher) {
        generateTeacherPage();
    } else {
        generateStudentPage();
    }

    // Display current wallet address
    document.getElementById('walletAddress').innerText = currentAccount;

    reloadElements();
});

document.addEventListener('visibilitychange', function() {
	if (document.visibilityState === 'visible') {
        reloadElements();
	}
});

/***********************LOGIC FUNCTION********************************/
// Check if is teacher
async function checkIfTeacher(address) {
    var result = await contract.methods.isTeacher(address).call();

    return result;
}

async function reloadElements() {
    if (currentAccount) {
        if (isTeacher) {
            loadCourses();
            loadTeacherForms();
        } else {
            loadStudentCourses();
            loadStudentForms();
        }   
    }
}

async function getLoginInformation() {
	// Prompt the user for input
	const userInput = prompt('Please enter your login (an integer):');

	// Parse the input as an integer
	accountId = parseInt(userInput);

	// Check if the input is a valid integer
	if (!isNaN(accountId) && Number.isInteger(accountId)) {
		alert('Login successful! You entered: ' + accountId);
	} else {
		alert('Invalid input. Please enter a valid integer.');
		location.reload();
	}
}

async function formatAttendanceResults(attendanceResults) {
    const attendanceDict = {};

    // Iterate through attendanceResults
    attendanceResults.forEach(result => {
        const courseDate = new Date(result.courseDate * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });

        // If the date is not in the dictionary, add it
        if (!attendanceDict[courseDate]) {
            attendanceDict[courseDate] = {};
        }

        // Iterate through students
        result.students.forEach(student => {
            // Add the attendance for the current date
            attendanceDict[courseDate][student] = result.finalResult[result.students.indexOf(student)];
        });
    });

    return attendanceDict;
}

/***********************STUDENT CODE********************************/
async function loadStudentCourses() {
    const courseSelect = document.getElementById('courseSelect');
    courseSelect.innerHTML = '<option value="" selected disabled hidden>Select a course</option>'; // Clear previous entries

    const courses = await contract.methods.getAllCourses().call();

    // Add courses to the dropdown
    for (const course of courses) {
        const option = document.createElement('option');
        option.value = course;
        option.text = course;
        courseSelect.appendChild(option);
    }
}

// Function to load forms for the student
async function loadStudentForms() {
	const formDetails = document.getElementById('formDetails');
	const studentChecklist = document.getElementById('studentChecklist');
	const submitFormButton = document.getElementById('submitFormButton');
	formDetails.innerHTML = '';
	studentChecklist.innerHTML = '';
	submitFormButton.innerHTML = '';

    const formSelect = document.getElementById('formSelect');
    formSelect.innerHTML = '<option value="" selected disabled hidden>Select a form</option>'; // Clear previous entries

    const forms = await contract.methods.getAttendanceFormsByStudent(currentAccount).call();

    // Add forms to the dropdown
    for (const form of forms) {
        const option = document.createElement('option');
        option.value = form.index.toString();
        option.text = `${form.courseName} - ${new Date(form.courseDate * 1000).toLocaleString()}`;
        formSelect.appendChild(option);
    }
}

function generateStudentPage() {
    const studentBody = document.getElementById('dashboardContainer');

    // Add h1 and Current Wallet Address
    studentBody.innerHTML += '<h1>Student Dashboard</h1>';
    studentBody.innerHTML += '<div><p>Current Wallet Address: <span id="walletAddress"></span></p></div>';

    // Add Select Course Section
    studentBody.innerHTML += '<h2>View Attendance by Course</h2>';
    studentBody.innerHTML += '<label for="courseSelect">Select Course:</label>';
    studentBody.innerHTML += '<select id="courseSelect" onchange="displayStudentAttendances()"></select>';
    studentBody.innerHTML += '<table id="attendanceTable"></table>';

    // Add Select Form Section
    studentBody.innerHTML += '<h2>Select Form to Answer</h2>';
    studentBody.innerHTML += '<select id="formSelect" onchange="displayStudentForms()"></select>';

    // Add Display Form Details Section
    studentBody.innerHTML += '<h3>Form Details</h3>';
    studentBody.innerHTML += '<div id="formDetails"></div>';
    studentBody.innerHTML += '<div id="studentChecklist"></div>';
    studentBody.innerHTML += '<div id="submitFormButton"></div>';
}

async function displayStudentAttendances() {
    const courseSelect = document.getElementById('courseSelect');
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

    // Format attendance results
    const formattedAttendance = await formatAttendanceResults(attendanceResults);
	// Extract dates and students
	const attendanceDates = Object.keys(formattedAttendance);
	const allStudents = Array.from(new Set(Object.values(formattedAttendance).flatMap(date => Object.keys(date))));

    // Create table headers
    const headerRow = attendanceTable.insertRow();
    const dateHeader = headerRow.insertCell(0);
    dateHeader.innerHTML = '<b>Student</b>'; // Header for the first column

    // Add dates to headers using attendanceDates
	attendanceDates.forEach(date => {
		const dateCell = headerRow.insertCell(headerRow.cells.length);
		dateCell.innerHTML = `<b>${date}</b>`;
		dateCell.style.border = '1px solid black';
	});

	const student = currentAccount;
	const row = attendanceTable.insertRow();
	const studentCell = row.insertCell(0);
	studentCell.innerHTML = `<b>${student}</b>`;
	studentCell.style.border = '1px solid black';

	// Add student attendances for each date
	attendanceDates.forEach(date => {
		const attendanceCell = row.insertCell(row.cells.length);
		const attendanceStatus = formattedAttendance[date][student];
		attendanceCell.innerHTML = attendanceStatus !== undefined ? (attendanceStatus ? 'Present' : 'Absent') : 'N/A';
		attendanceCell.style.border = '1px solid black';
	});
}


async function displayStudentForms() {
    const formSelect = document.getElementById('formSelect');
    const selectedFormIndex = formSelect.value;

    const formDetails = document.getElementById('formDetails');
    formDetails.innerHTML = ''; // Clear previous details

    const studentChecklist = document.getElementById('studentChecklist');
    studentChecklist.innerHTML = ''; // Clear previous checklist

    const submitFormButton = document.getElementById('submitFormButton');
    submitFormButton.innerHTML = ''; // Clear previous button

    if (!selectedFormIndex) {
        return;
    }

    const forms = await contract.methods.getAttendanceFormsByStudent(currentAccount).call();
    let selectedForm;

	// Loop through the forms to find the one with the right index
	for (const form of forms) {
		if (form.index.toString() === selectedFormIndex) {
			selectedForm = form;
			break;
		}
	}

    // Display form details
    formDetails.innerHTML = `
        <p><b>Course Name:</b> ${selectedForm.courseName}</p>
        <p><b>Course Date:</b> ${new Date(selectedForm.courseDate * 1000)}</p>
        <p><b>Teacher:</b> ${selectedForm.teacher}</p>
		<p><b>Students:</b></p>
    `;

    // Create a checklist for students
    selectedForm.students.forEach((student, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `studentCheckbox${index}`;
        checkbox.value = student;

        const label = document.createElement('label');
        label.htmlFor = `studentCheckbox${index}`;
        label.appendChild(document.createTextNode(student));

        const br = document.createElement('br');

        studentChecklist.appendChild(checkbox);
        studentChecklist.appendChild(label);
        studentChecklist.appendChild(br);
    });

    // Create the "Submit Form" button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Form';
    submitButton.onclick = answerForm;
    submitFormButton.appendChild(submitButton);
}

async function answerForm() {
    const formSelect = document.getElementById('formSelect');
    const selectedFormIndex = formSelect.value;

    if (!selectedFormIndex) {
        alert('Please select a form to answer.');
        return;
    }

    const forms = await contract.methods.getAttendanceFormsByStudent(currentAccount).call();
    let selectedForm;

	// Loop through the forms to find the one with the right index
	for (const form of forms) {
		if (form.index.toString() === selectedFormIndex) {
			selectedForm = form;
			break;
		}
	}

    const students = selectedForm.students;
    const isPresent = []; // Placeholder for the student's attendance

    // Retrieve the values from the checklist
    students.forEach((student, index) => {
        const checkbox = document.getElementById(`studentCheckbox${index}`);
        const answer = checkbox.checked;
        isPresent.push(answer);
    });

    // Call the smart contract function to answer the form
    await contract.methods.answerAttendanceForm(selectedFormIndex, isPresent).send({ from: currentAccount, gas: 2000000 });

    // Reload forms for the student after answering
	reloadElements();
}

/***********************TEACHER CODE********************************/
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
	reloadElements();
}

function generateTeacherPage() {
    const teacherBody = document.getElementById('dashboardContainer');

    // Add h1 and Current Wallet Address
    teacherBody.innerHTML += '<h1>Teacher Dashboard</h1>';
    teacherBody.innerHTML += '<div><p>Current Wallet Address: <span id="walletAddress"></span></p></div>';

    // Add Add Course Section
    teacherBody.innerHTML += '<h2>Add Course</h2>';
    teacherBody.innerHTML += '<input type="text" id="courseNameInput" placeholder="Enter course name">';
    teacherBody.innerHTML += '<button onclick="addCourse()">Add</button>';

    // Add Create New Form Section
    teacherBody.innerHTML += '<h2>Create New Form</h2>';
    teacherBody.innerHTML += '<label for="courseSelect1">Course Name:</label>';
    teacherBody.innerHTML += '<select id="courseSelect1"></select>';
    teacherBody.innerHTML += '<label for="students">Students (comma-separated addresses):</label>';
    teacherBody.innerHTML += '<input type="text" id="students" placeholder="Enter students\' addresses">';
    teacherBody.innerHTML += '<button onclick="addForm()">Create Form</button>';

    // Add View and Close Forms Section
    teacherBody.innerHTML += '<h2>View and Close Forms</h2>';
    teacherBody.innerHTML += '<select id="formSelect" onchange="displayFormDetails()"></select>';
    teacherBody.innerHTML += '<button onclick="closeForm()">Close Form</button>';

    // Add Display Form Details Section
    teacherBody.innerHTML += '<h3>Form Details</h3>';
    teacherBody.innerHTML += '<div id="formDetails"></div>';

    // Add View Attendance by Course Section
    teacherBody.innerHTML += '<h2>View Attendance by Course</h2>';
    teacherBody.innerHTML += '<label for="courseSelect2">Select Course:</label>';
    teacherBody.innerHTML += '<select id="courseSelect2" onchange="displayAttendanceByCourse()"></select>';
    teacherBody.innerHTML += '<table id="attendanceTable"></table>';
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

    // Format attendance results
    const formattedAttendance = await formatAttendanceResults(attendanceResults);
	// Extract dates and students
	const attendanceDates = Object.keys(formattedAttendance);
	const allStudents = Array.from(new Set(Object.values(formattedAttendance).flatMap(date => Object.keys(date))));

    // Create table headers
    const headerRow = attendanceTable.insertRow();
    const dateHeader = headerRow.insertCell(0);
    dateHeader.innerHTML = '<b>Student</b>'; // Header for the first column

    // Add dates to headers using attendanceDates
	attendanceDates.forEach(date => {
		const dateCell = headerRow.insertCell(headerRow.cells.length);
		dateCell.innerHTML = `<b>${date}</b>`;
		dateCell.style.border = '1px solid black';
	});

	// Iterate through students and populate attendance data
	allStudents.forEach(student => {
		const row = attendanceTable.insertRow();
		const studentCell = row.insertCell(0);
		studentCell.innerHTML = `<b>${student}</b>`;
		studentCell.style.border = '1px solid black';

		// Add student attendances for each date
		attendanceDates.forEach(date => {
			const attendanceCell = row.insertCell(row.cells.length);
			const attendanceStatus = formattedAttendance[date][student];
			attendanceCell.innerHTML = attendanceStatus !== undefined ? (attendanceStatus ? 'Present' : 'Absent') : 'N/A';
			attendanceCell.style.border = '1px solid black';
		});
	});
}

// Function to create a new form
async function addForm() {
    const courseName = document.getElementById('courseSelect1').value;
    const students = document.getElementById('students').value.split(',').map(addr => addr.trim());

    if (!courseName || students.length === 0) {
        alert('Please enter valid course name and students');
        return;
    }

    await contract.methods.createAttendanceForm(courseName, students).send({ from: currentAccount, gas: 2000000 });

    reloadElements();
}

// Function to close the selected form by calculating attendance result
async function closeForm() {
    const formSelect = document.getElementById('formSelect');
    const selectedIndex = formSelect.value;

    if (selectedIndex >= 0) {
        const teacherForms = await contract.methods.getAttendanceFormsByTeacher(currentAccount).call();
        const selectedForm = teacherForms[selectedIndex];

        await contract.methods.calculateAttendanceResult(selectedIndex).send({ from: currentAccount, gas: 2000000 });

        // Reload teacher's forms after closing the form
        reloadElements();
    }
}