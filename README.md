# Student Attendance Tracking DAO on Hyperledger Fabric

## Overview

The Student Attendance Tracking DAO (Decentralized Autonomous Organization) on Hyperledger Fabric is a blockchain-based system for tracking student attendance. This project allows teachers to create attendance forms on the blockchain, students to submit their attendance, and administrators to view and manage attendance results.

## Features

- **Teacher Interface:** Create and manage attendance forms.
- **Student Interface:** Submit attendance for a specific form.
- **Administration Interface:** View overall attendance and resolve disputes.

## Getting Started

### Prerequisites

1. Docker
2. Docker Compose
3. Go Programming Language
4. Hyperledger Fabric Samples and Binaries

### Set Up Local Fabric Network

1. Clone the Hyperledger Fabric Samples repository:

    ```bash
    git clone https://github.com/hyperledger/fabric-samples.git
    cd fabric-samples
    ```

2. Start the Fabric network:

    ```bash
    cd test-network
    ./network.sh up createChannel -ca
    ```

3. Deploy the smart contract (chaincode):

    ```bash
    cd ../chaincode
    ./network.sh deployCC -ccn attendance -ccp ../chaincode -ccl go
    ```

### Interact with the Network

1. Run the sample applications:

    ```bash
    cd ../application
    go run main.go
    ```

## Smart Contract (Chaincode)

The smart contract (chaincode) is written in Go and defines the logic for opening and closing attendance, submitting attendance, calculating overall attendance, and retrieving results. Check the `chaincode/attendance_contract.go` file for details.

## Usage

- Use the provided interfaces (teacher, student, administration) to interact with the attendance tracking system.
- Teachers can create forms, students can submit attendance, and administrators can view and manage attendance results.

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).