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
    
    // Load courses on page load
    loadCourses();

    // Load forms for the student
    loadFormsForStudent();
});

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

async function displayStudentAttendance() {
    const courseSelect = document.getElementById('courseSelect');
    const selectedCourse = courseSelect.value;

    const studentAttendanceTable = document.getElementById('studentAttendanceTable');
    studentAttendanceTable.innerHTML = ''; // Clear previous table

    if (!selectedCourse) {
        return;
    }

    const attendanceResults = await contract.methods.getAttendanceResultsByCourse(selectedCourse).call();
    const studentAddress = document.getElementById('walletAddress').textContent;

    // Find the student's attendance in the selected course
    const studentAttendance = attendanceResults.find(result =>
        result.students.includes(studentAddress)
    );

    if (!studentAttendance) {
        return;
    }

    // Add border styling to the table
    studentAttendanceTable.style.borderCollapse = 'collapse';

    // Create table headers
    const headerRow = studentAttendanceTable.insertRow();
    const dateHeader = headerRow.insertCell(0);
    dateHeader.innerHTML = '<b>Date and Hour</b>';
    dateHeader.style.border = '1px solid black'; // Border for header cell

    // Add student attendance
    const studentIndex = studentAttendance.students.indexOf(studentAddress);
    const studentAttendanceCell = headerRow.insertCell(1);
    studentAttendanceCell.innerHTML = `<b>${studentAttendance.students[studentIndex]}</b>`;
    studentAttendanceCell.style.border = '1px solid black'; // Border for header cell

    // Populate attendance data
    studentAttendance.finalResult.forEach(result => {
        const row = studentAttendanceTable.insertRow();
        const dateCell = row.insertCell(0);
        dateCell.innerHTML = `<b>${result.courseDate}</b>`;
        dateCell.style.border = '1px solid black'; // Border for data cell

        // Add student attendance
        const attendanceCell = row.insertCell(1);
        attendanceCell.innerHTML = result.finalResult[studentIndex] ? 'Present' : 'Absent';
        attendanceCell.style.border = '1px solid black'; // Border for data cell
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
	location.reload();
}