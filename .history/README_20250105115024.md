# To-Do List Manager

A responsive web application for managing a to-do list, built using Next.js, Context API, and a design system like TailwindCSS. The app allows users to view, add, and edit tasks with data fetched from a dummy API.

## Features

### Pages:
1. **Home Page**: Displays a list of tasks, showing their title, description, and status (completed or not).
2. **Add Task Page**: Allows the user to create a new task with a title and description.
3. **Edit Task Page**: Allows the user to update the status of an existing task.

### Functionalities:
- **Task List**: Users can view all tasks fetched from the dummy API.
- **Add Task**: Users can add new tasks.
- **Edit Task**: Users can edit the status of existing tasks.
- **State Management**: State management is handled using **Context API**.
- **Responsive UI**: The app has a fully responsive design using **TailwindCSS** for a clean and modern user interface.
- **REST API**: The app communicates with the dummy API provided by [jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) to fetch and update task data.

## Tech Stack

- **Frontend Framework**: Next.js
- **State Management**: Context API
- **UI Design**: TailwindCSS
- **REST API**: jsonplaceholder.typicode.com
- **JavaScript**: ES6+

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
    git clone https://github.com/your-username/todo-list-manager.git
    cd todo-list-manager

2. **Install dependencies**:
    npm install

3. **Start the development server**:    
    - For **Next.js**:
      npm run dev

4. **Open the app**:
    Open `http://localhost:3000` in your browser to view the app.


## API Integration

This project makes use of the **jsonplaceholder** API for fetching and updating tasks. The relevant API endpoints used are:
- `GET /todos`: Fetch a list of tasks.
- `PUT /todos/:id`: Update the status of a task.

For more details, check the [jsonplaceholder API](https://jsonplaceholder.typicode.com/todos).

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the Next.js development server.
- **`npm run build`**: Builds the app for production.

## Usage

1. **View Tasks**: The homepage shows a list of tasks with their title, description, and status.
2. **Add Task**: Navigate to the "Add Task" page to create a new task with a title and description.
3. **Edit Task**: Click on a task from the home page to navigate to the "Edit Task" page and update its status.

## Customization

You can switch between **Material-UI** or **TailwindCSS** for the UI design by configuring the styles in the project. You can also use **Redux Toolkit** or **Context API** for state management by modifying the state management implementation as needed.

## License

This project is licensed under the MIT License.

This README.md provides a comprehensive overview of the project, including setup instructions, tech stack, features, and folder structure. Adjust the specifics according to our actual implementation (React.js vs. Next.js, Redux vs. Context API, Material-UI vs. TailwindCSS).




Developed by Ashvani Singh !!!!!!!!