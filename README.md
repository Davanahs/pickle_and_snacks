# AI Studio Web Application Deployment

This repository contains the source code and deployment guide for running an AI-powered web application built using modern web technologies and deployed using AWS cloud services.

The application integrates Google's Gemini AI API and demonstrates a complete workflow from development to cloud deployment.

---

# Project Overview

This project demonstrates how an AI-based web application can be built, managed, and deployed using cloud infrastructure.

The system allows developers to run the application locally and deploy it to a scalable environment using AWS services like EC2 and DynamoDB.

---

# Technologies Used

## Frontend & Development
- HTML
- TypeScript
- Vite
- Node.js

## AI Integration
- Google Gemini API

## Cloud Services
- AWS EC2 (Application Hosting)
- AWS DynamoDB (Database)
- AWS IAM (Access Management)
- AWS Security Groups (Network Security)

## Version Control
- Git
- GitHub

---

# Project Structure
project/
│
├── src/ # Application source code

├── images/ # Project screenshots
│
├── index.html
├── metadata.json
├── package.json
├── vite.config.ts
├── README.md


---

## System Workflow

The application follows a structured workflow from development to deployment. The steps involved in the system are:

1. **Requirement Analysis**
   Identify the system requirements and define the functionality of the application such as user management, product listing, and order processing.

2. **Database Design**
   Design the database structure using an ER Diagram which includes the entities: Users, Products, Orders, and Order Items.

3. **Frontend Development**
   Develop the user interface using HTML, TypeScript, and Vite for fast development and modern web performance.

4. **Backend Development**
   Implement the server-side logic using Flask to handle API requests, user authentication, product management, and order processing.

5. **AI Integration**
   Integrate the Gemini API to enable AI-powered features in the application.

6. **Local Testing**
   Run the application locally using Node.js and verify that all modules such as login, product display, and order creation are working correctly.

7. **Version Control**
   Upload the project to GitHub to maintain version control and enable collaborative development.

8. **Cloud Setup (AWS)**
   Configure AWS services including IAM roles, DynamoDB database, and EC2 instances.

9. **Database Deployment**
   Create DynamoDB tables to store application data such as users, products, and orders.

10. **Application Deployment**
    Launch an EC2 instance, configure security groups, and deploy the application by cloning the repository from GitHub.

11. **Functional Testing**
    Verify that the deployed application works correctly by testing user operations and database interactions.

12. **Conclusion**
    Evaluate the performance of the system and summarize the deployment results.


# Run the Application Locally

## Prerequisites

Make sure the following tools are installed:

- Node.js
- Git

---

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

```
Move to project folder:
```bash
cd YOUR_REPOSITORY_NAME
```

Install dependencies:
```bash
npm install
```
Run the Application:
```bash
npm run dev
```

AWS Deployment Process:

Step 1 – Setup DynamoDB

Create a DynamoDB table for storing application data.

Step 2 – Create IAM Role

Create an IAM role and attach required policies for:

DynamoDB Access

EC2 Access

Step 3 – Launch EC2 Instance

Launch an EC2 instance to host the application.

Step 4 – Configure Security Groups

Allow the following ports: 
| Port | Purpose           |
| ---- | ----------------- |
| 22   | SSH Access        |
| 80   | HTTP Access       |
| 5000 | Flask Application |

Step 5 – Install Required Software

Install Node.js, Git, and Python on the EC2 instance.

Step 6 – Clone Repository on EC2:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

Step 7 – Install Dependencies:
```bash
npm install
```

Step 8 – Run the Application:
``` bash
npm run dev
```

# Deployment Architecture:

The application follows a cloud deployment architecture where the frontend and backend are hosted on AWS EC2 and connected to DynamoDB for data storage.

# Functional Testing:

After deployment, perform the following checks:
Verify application loads successfull
Confirm Gemini API responses
Check DynamoDB data storage
Validate user interaction

# Future Improvements:

CI/CD pipeline using GitHub Actions

Docker container deployment

HTTPS and custom domain setup

Load balancing using AWS ELB

# Conclusion:

This project demonstrates how to build and deploy an AI-powered web application using modern development tools and AWS cloud services.
