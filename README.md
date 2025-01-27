# TaskFlow_CRUD_App

A full-stack React-based todo list application with CRUD (Create, Read, Update, Delete) operations and time tracking features. The project consists of a React frontend (client) and a backend server (server).

## Features

- View todos in a table format with start/end dates and times
- Add new todos
- Edit existing todos
- Delete todos
- Track completion status (Completed/Pending)
- Responsive design with Bootstrap
- Real-time updates without page refresh
- Local time formatting for dates and times

## Technologies Used

- React (Frontend)
- JavaScript (ES6+)
- Bootstrap 5 (Styling)
- REST API (Backend Communication)
  -Node.js
- Express.js
- HTML5
- CSS3

<div class="" style="display:flex;">
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png">
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png"> 
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png">
 <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png">
 <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png">  
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png">
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png"> 
<img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png"> 
</div>

## Installation

### Prerequisites

- Node.js and npm installed <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png">
- PostgreSQL installed and running

### Setup Backend (Server)

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. **Install dependencies**

```bash
npm install

```

3. **Set up the database:**

- Create a database in PostgreSQL.
- Update the database configuration in server/db.js.

4. **Start the backend server:**

```bash
nodemon index.js
```

The server will run on `http://localhost:3000`.

## Setup Frontend (Client)

1. **Open new terminal and navigate to the client folder:**

```bash
cd client
```

2. **Install dependencies:**

```bash
npm install

```

3. **Start the React application:**

```bash
npm start

```

The frontend will run on `http://localhost:5000`.

## Screenshot

![Screenshot](/client/image.png)

## API Endpoints

The backend server provides the following REST API endpoints:

- **GET** `/todos` - Fetch all todos
- **DELETE** `/todos/:id` - Delete a todo by ID
- **PUT** `/todos/:id` - Update a todo by ID

## 🤝 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/firoguteta/)
- [X(Twitter)](https://x.com/FiroGute492)
