# Whois Lookup Frontend

This is a React-based frontend application that interacts with the Whois API to provide comprehensive information about domain names, including details about domain registration, ownership, and contact information.

## Features

- Input field for users to enter a domain name.
- Option to select the type of information (domain information/contact information).
- Display domain and contact information in a user-friendly format.
- Graceful error handling for failed lookups.
- Responsive design with modern styling and animations using Tailwind CSS.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup and Installation

1. **Clone the repository:**

   git clone https://github.com/your-username/whois-frontend.git
   cd whois-frontend

2. **Install Dependencies**

   npm install

3. **Create an .env file on the root of the file and get the API key on https://whois.whoisxmlapi.com/ || Check env.example for example**

## Running the application

1. **Start Development Server**

   npm start

2. **Open your browser and go to http://localhost:5000**

## File Structure

whois-frontend/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── DomainInfoTable.js
│ │ ├── ContactInfoTable.js
│ │ ├── DomainLookupForm.js
│ │ └── ...
│ ├── utils/
│ │ └── dateFormatter.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── .env
├── package.json
└── README.md
