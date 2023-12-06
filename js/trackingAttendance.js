// Config contract information
const contractAddress = "0x42AD02eE8Ef7e0B3F321bABf01033328f558bDec";
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "teacher",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "studentList",
                "type": "address[]"
            }
        ],
        "name": "AttendanceFormCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isPresent",
                "type": "bool"
            }
        ],
        "name": "AttendanceMarked",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "studentList",
                "type": "address[]"
            }
        ],
        "name": "createAttendanceForm",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isPresent",
                "type": "bool"
            }
        ],
        "name": "markAttendance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "attendanceForms",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
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
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "attendanceRecords",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isPresent",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllAttendances",
        "outputs": [
            {
                "internalType": "bool[]",
                "name": "",
                "type": "bool[]"
            },
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hour",
                "type": "uint256"
            }
        ],
        "name": "getAttendanceStatistics",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "present",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "absent",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }];

// Connect to your smart contract
// Initialize web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(Ganache.provider());
    // console.log
} else {
    web3  = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545/")); //for events
}
const contract = new web3.eth.Contract(contractABI, contractAddress);
web3.eth.defaultAccount = "0x023dA9d7B7638ec4bb0c9C253F45a7507C623D8d";

function addAttendanceForm() {
    // Get form input values
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const duration = document.getElementById("duration").value;
    const studentList = document.getElementById("studentList").value.split(',');

    // Call smart contract function to add attendance form
    contract.methods.createAttendanceForm(date, hour, duration, studentList)
        .send({ from: web3.eth.defaultAccount })
        .then(receipt => {
            console.log("Transaction Receipt:", receipt);
            alert("Attendance form added successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error adding attendance form. Please check the console for details.");
        });
}

async function fetchAndDisplayForms() {
    // Call smart contract function to get all forms
    const forms = await contract.methods.getAllForms().call({ from: web3.eth.defaultAccount });

    // Display forms on the page
    const formsListDiv = document.getElementById("formsList");
    forms.forEach(form => {
        const formDiv = document.createElement("div");
        formDiv.innerHTML = `
            <p><strong>Date:</strong> ${form.date}</p>
            <p><strong>Hour:</strong> ${form.hour}</p>
            <p><strong>Duration:</strong> ${form.duration} hours</p>
            <p><strong>Student List:</strong> ${form.studentList.join(', ')}</p>
            <hr>
        `;
        formsListDiv.appendChild(formDiv);
    });
}

// Function to get all attendance forms
async function getAllAttendanceForms() {
    try {
        // Call the function on the smart contract
        const result = await contract.methods.getAllAttendances().call();

        // Display the result
        displayAttendanceForms(result);
    } catch (error) {
        console.error("Error getting attendance forms:", error);
    }
}

// Function to display attendance forms
function displayAttendanceForms(result) {
    const formsListDiv = document.getElementById('formsList');
    
    // Assuming the result contains arrays of isPresent, student, date, and hour
    const isPresentArray = result[0];
    const studentArray = result[1];
    const dateArray = result[2];
    const hourArray = result[3];

    for (let i = 0; i < isPresentArray.length; i++) {
        const formDiv = document.createElement('div');
        formDiv.innerHTML = `
            <p>Student: ${studentArray[i]}</p>
            <p>Date: ${dateArray[i]}</p>
            <p>Hour: ${hourArray[i]}</p>
            <p>Is Present: ${isPresentArray[i]}</p>
            <hr>
        `;
        formsListDiv.appendChild(formDiv);
    }
}