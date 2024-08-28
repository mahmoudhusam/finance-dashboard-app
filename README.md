# Finance Dashboard App

This project is a MERN (MongoDB, Express, React, Node.js) Finance Dashboard application with Machine Learning Predictions. It features a fully functional dashboard for managing and visualizing financial data, complete with charts, tables, and prediction models.

## Project Overview

This Finance Dashboard App allows users to track financial data, view product lists, and analyze transactions. The application also integrates machine learning to predict financial trends. The frontend is built with Vite, Redux Toolkit, Material UI, and Recharts, while the backend uses Node.js, Express, and MongoDB.

### Key Features

- **Dashboard Layout:** An interactive and responsive dashboard to monitor financial data.
- **State Management:** Redux Toolkit is used for efficient state management across the application.
- **Material UI:** A comprehensive component library for building the UI.
- **Recharts:** A charting library for visualizing data with charts and graphs.
- **Machine Learning Predictions:** Integrates basic machine learning models for financial predictions.
- **API Integration:** RESTful APIs for managing products, transactions, and key performance indicators (KPIs).

## Project Structure

The project is divided into two main folders:

- **server:** Contains the backend code with Node.js and Express.
- **client:** Contains the frontend code built with React and Vite.

### Backend (`server`)

- **Node.js:** Used as the runtime environment.
- **Express.js:** Serves as the backend framework for handling requests and routing.
- **MongoDB:** A NoSQL database for storing and managing financial data.
- **Mongoose:** Used for data modeling and schema validation.

### Frontend (`client`)

- **Vite:** A fast build tool and development server.
- **React:** The JavaScript library for building user interfaces.
- **Redux Toolkit:** Manages the application state.
- **Material UI:** Provides a set of reusable components for building the UI.
- **Recharts:** Used to create dynamic and interactive charts.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mahmoudhusam/finance-dashboard-app.git
   cd finance-dashboard-app

2. **Install dependencies:**
    Navigate to both the `server` and `client` directories and run the following commands:

   ```bash
   cd server
   npm install
   
   cd ../client
   npm install   


3. **Set Up Environment Variables:**

   Create a .env file in the server directory and add your environment variables (e.g., MONGO_URI).

4. **Run the Application:**:

    Start the Backend Server:
   ```bash
   cd server
   npm start

    Start the Frontend Server:

   ```bash
   cd ../client
   npm run dev