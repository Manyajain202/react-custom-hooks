React Custom Hooks – Product Fetching App

About the Project

This project demonstrates how to create and use a custom React Hook to fetch product data from an API. The custom hook manages the loading state, error handling, and fetched data.

Features

- Created a reusable custom hook called "useFetch".
- Fetches product data from the EscuelaJS API.
- Displays a loading message while fetching data.
- Handles API errors and displays an error message.
- Shows a message when no products are found.
- Displays product images, titles, and prices.
- Uses CSS Grid to create a responsive product layout.

Technologies Used

- React
- JavaScript
- Vite
- CSS
- Fetch API
- React Hooks ("useState" and "useEffect")

API Used

"EscuelaJS Products API" (https://api.escuelajs.co/api/v1/products)

Getting Started

1. Clone the Repository

git clone https://github.com/Manyajain202/react-custom-hooks.git

2. Navigate to the Project Folder

cd react-custom-hooks

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

Open the local URL displayed in the terminal to view the application in your browser.

Project Structure

react-custom-hooks/
├── public/
├── src/
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

Learning Outcomes

- Understanding and creating custom React Hooks.
- Using "useState" and "useEffect".
- Fetching data from an external API.
- Managing loading and error states.
- Displaying API data dynamically in React.
- Styling a responsive layout using CSS Grid.

Author

Manya Jain
GitHub Repository
"View Project on GitHub" (https://github.com/Manyajain202/react-custom-hooks)