# Smart Agriculture Monitoring System

## Overview

This project is a Smart Agriculture Monitoring System that integrates IoT technology with the MERN (MongoDB, Express.js, React, Node.js) stack. It aims to monitor and display crucial parameters such as soil moisture, water level, and oxygen levels to ensure optimal conditions for agriculture. The system utilizes MongoDB App Services HTTP Endpoint for seamless data management and retrieval.

## Features

- **Real-time Monitoring**: Continuously tracks soil moisture, water level, and oxygen levels.
- **Data Visualization**: Displays sensor data in a user-friendly interface.
- **Alerts and Notifications**: Sends alerts when any parameter goes beyond the threshold levels.
- **IoT Integration**: Uses sensors to collect real-time data.
- **MERN Stack**: Employs MongoDB, Express.js, React, and Node.js for a robust and scalable application.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas, MongoDB App Services HTTP Endpoint)
- **IoT**: Various sensors for soil moisture, water level, and oxygen monitoring

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account
- IoT sensors (Soil Moisture Sensor, Water Level Sensor, Oxygen Sensor)
- ESP8266 or similar microcontroller

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/smart-agriculture-monitoring-system.git
   cd smart-agriculture-monitoring-system
   ```

2. **Install dependencies:**

   ```bash
   cd backend
   npm install
   cd ../react_agriculture_admin
   npm install
   cd ../react_agriculture_user
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `backend` directory and add your MongoDB Atlas connection string and other necessary configurations.

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=8000
   ```

4. **Run the application:**

   ```bash
   # In the backend directory
   npm start

   # In the react_agriculture_admin directory
   npm start

   # In the react_agriculture_user directory
   npm start
   ```

### IoT Setup

1. **Connect the sensors** to your ESP8266 or other microcontroller.
2. **Upload the code** to your microcontroller using the Arduino IDE or similar.
3. **Configure the sensors** to send data to your MongoDB App Services HTTP Endpoint.

### Usage

- Open your browser and go to `http://localhost:3000` to see the user dashboard.
- Open your browser and go to `http://localhost:3001` to see the admin dashboard.
- Monitor real-time data for soil moisture, water level, and oxygen levels.
- Set threshold levels for alerts and notifications.
