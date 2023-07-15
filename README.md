# PedalPal
## Bicycle Rental System

This is a readme file for the Bicycle Rental System, a web application implemented using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system allows users to rent bicycles online and provides an interface for managing rentals and inventory.

### Team Members

* [Anusree K]
* [Anagha K S]
* [Rishikesh V K]
* [Melvin T K]

### Features

The Bicycle Rental System provides the following features:

- User registration and login
- Browse available bicycles
- Rent bicycles for a specific duration
- Add bicycles to the inventory (admin only)
- Manage rentals and inventory (admin only)
- View rental history and details
- Responsive design for desktop and mobile devices

### Technologies

The system is implemented using the following technologies:

- MongoDB: A NoSQL database used for storing user information, bicycles, rentals, and other data.
- Express.js: A backend framework for creating RESTful APIs and handling HTTP requests.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment used for running the backend server.
- Redux: A state management library for managing application state.
- Bootstrap: A CSS framework used for responsive and mobile-first web development.
- Axios: A promise-based HTTP client for making API requests.

### Installation

To install and run the Bicycle Rental System locally, follow these steps:

1. Clone the repository
    ```
    git clone https://github.com/rishikeshvk/PedalPal.git
    ```
2. Install dependencies
    ```
    cd PedalPal
    npm install
    cd client
    npm install
    ```
3. Create a .env file in the root directory and add the following environment variables:
    ```
    MONGO_URL=<your_mongodb_url>
    ```
4. Start the backend server
    ```
    cd PedalPal
    npm run server
    ```
5. Start the frontend server
    ```
    cd PedalPal/client
    npm start
    ```
6. Open http://localhost:3000 in your browser

### Screenshots

### Usage

- Register a new user account or login with an existing account.
- Browse the available bicycles and select a bicycle to rent.
- Choose the rental duration and confirm the rental.
- View the rental details and history in the user profile.

### API Endpoints

The following are the main API endpoints used in the Bicycle Rental System:

- /api/login: POST request to login a user
- /api/register: POST request to register a new user
- /api/getallbicycles: GET request to get all bicycles
- /api/addbicycle: POST request to add a new bicycle
- /api/editbicycle: POST request to edit a bicycle
- /api/deletebicycle: POST request to delete a bicycle
- /api/rentbicycle: POST request to rent a bicycle
- /api/getallrentals: GET request to get all rentals

### License

The Bicycle Rental System is open-source software licensed under the [MIT License](LICENSE).