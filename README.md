# Ethereum Student Attendance Tracking DAO

## Overview

The Ethereum Student Attendance Tracking DAO is a decentralized application (DApp) built on the Ethereum blockchain. It provides a secure and transparent way for teachers to create and track student attendance through smart contracts. The system ensures accuracy and reliability by leveraging Ethereum's blockchain technology.

## Features

- **Teacher Functionality:**
  - Teachers can create and post attendance forms on the blockchain.
  - Only teachers are authorized to create attendance forms.

- **Student Functionality:**
  - Students can answer attendance forms during the specified date and time.
  - Absence is determined based on voting results and predefined rules.

- **Results Storage:**
  - Final attendance results are securely stored on the Ethereum blockchain.

- **Access Control:**
  - Only authorized users (teachers, students, or administrators) can view attendance statistics.

## Smart Contract Structure

The project uses Ethereum smart contracts written in Solidity. The primary components include:

- **AttendanceForm Struct:**
  - Stores details of each attendance form.
  - Includes course name, teacher address, date, duration, students list, and votes list.

- **AttendanceResult Struct:**
  - Stores final attendance results.
  - Includes course name, teacher address, date, duration, and final results list.

- **Functions:**
  - Teachers can create attendance forms.
  - Students can answer attendance forms.
  - Final results are calculated based on predefined rules.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ethereum-attendance-dao.git
   ```

2. Install dependencies:

    ```bash
    Copy code
    cd ethereum-attendance-dao
    npm install
    Deploy the smart contract using Remix IDE or your preferred Ethereum development environment.
    ```

## Usage

Deploy the smart contract on the Ethereum blockchain.  
  
Interact with the DApp through the provided HTML pages:  
* Teacher Page: Create and post attendance forms.
* Student Page: Answer attendance forms.
* Statistics Page: View attendance statistics.  
Ensure MetaMask or another Ethereum wallet is connected to the DApp for transaction signing.