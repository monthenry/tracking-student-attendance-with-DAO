// Config contract information
const contractAddress = "0x12d653FdfB680E7AD26742B30a20404F319f1faF";
const contractABI = [
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
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"inputs": [],
		"name": "getAllAttendanceForms",
		"outputs": [
			{
				"components": [
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
document.addEventListener('DOMContentLoaded', async () => {
    // Connect to your smart contract
    // Initialize web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(Ganache.provider());
        // console.log
    } else {
        web3  = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545/")); //for events
    }
    // web3.eth.defaultAccount = "0xB1882a7bCa34bE9F4d83c942B2CB5b6cBf9C44a3";

    // Display current wallet address
    document.getElementById('walletAddress').innerText = web3.eth.defaultAccount;

    contract = new web3.eth.Contract(contractABI, contractAddress);
    
    // Load teacher's forms on page load
    loadTeacherForms();
});

// Function to load teacher's forms into the dropdown
async function loadTeacherForms() {
    const accounts = await web3.eth.getAccounts();
    const teacherForms = await contract.methods.getAttendanceFormsByTeacher(accounts[0]).call();
    const formSelect = document.getElementById('formSelect');

    // Clear previous options
    formSelect.innerHTML = '<option value="" selected disabled hidden>Select a form</option>';

    // Add new options
    teacherForms.forEach((form, index) => {
        const option = document.createElement('option');
        option.value = index;
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
        const accounts = await web3.eth.getAccounts();
        const teacherForms = await contract.methods.getAttendanceFormsByTeacher(accounts[0]).call();
        const selectedForm = teacherForms[selectedIndex];

        // Display form details
        formDetailsDiv.innerHTML = `
            <p><strong>Course Name:</strong> ${selectedForm.courseName}</p>
            <p><strong>Course Date:</strong> ${new Date(selectedForm.courseDate * 1000).toLocaleString()}</p>
            <p><strong>Students:</strong> ${selectedForm.students.join(', ')}</p>
        `;
    } else {
        formDetailsDiv.innerHTML = ''; // Clear details if no form is selected
    }
    
}

// Function to create a new form
async function createNewForm() {
    const courseName = document.getElementById('courseName').value;
    const students = document.getElementById('students').value.split(',').map(addr => addr.trim());

    if (!courseName || students.length === 0) {
        alert('Please enter valid course name and students');
        return;
    }

    const accounts = await web3.eth.getAccounts();
    await contract.methods.createAttendanceForm(courseName, students).send({ from: accounts[0], gas: 2000000 });

    // Reload teacher's forms after creating a new one
    loadTeacherForms();
}

// Function to close the selected form by calculating attendance result
async function calculateAttendanceResult() {
    const formSelect = document.getElementById('formSelect');
    const selectedIndex = formSelect.value;

    if (selectedIndex >= 0) {
        const accounts = await web3.eth.getAccounts();
        const teacherForms = await contract.methods.getAttendanceFormsByTeacher(accounts[0]).call();
        const selectedForm = teacherForms[selectedIndex];

        await contract.methods.calculateAttendanceResult(selectedIndex).send({ from: accounts[0], gas: 2000000 });

        // Reload teacher's forms after closing the form
        loadTeacherForms();
    }
}
