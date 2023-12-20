// Config contract information
const contractAddress = "0x9F890b4D5fcAbacB455e3aE110944aa25D773D14";
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
var accountId = null;
var currentAccount = null;

document.addEventListener('DOMContentLoaded', async () => {
	getLoginInformation();

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
    
    reloadElements();
});

document.addEventListener('visibilitychange', function() {
	if (document.visibilityState === 'visible') {
		reloadElements();
	}
});

async function reloadElements() {
	// Load courses on page load
	loadCourses();

	// Load forms for the student
	loadFormsForStudent();
}

async function loadCourses() {
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
async function loadFormsForStudent() {
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

async function displayStudentAttendance() {
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


async function displayFormDetails() {
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