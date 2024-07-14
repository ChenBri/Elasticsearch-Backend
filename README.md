## About:
This project is a full-stack application demonstrating different Elasticsearch capabilities, including executing search queries, updating documents, and adding new documents through a custom form.

The website executes various queries, sending requests to a backend connected to Elasticsearch Cloud that I created, and displays the results on the front-end in both JSON format and as a formatted table.

The front-end and back-end are deployed using Netlify, so any change committed to either side is automatically updated and deployed. All queries on the website have been tested using Kibana, the Elasticsearch JavaScript API, and the Elasticsearch Python API. The code can easily be adapted to integrate with any backend, regardless of the programming language.

### First Backend (Node.js):
The backend is built with Node.js using the Express framework. I managed database access through API keys stored as environment variables. The API supports three primary endpoints:
1. /api/add: Adds a new document to a specified index.
2. /api/search: Searches within a specified index based on a custom query, script, or aggregation, returning different data depending on the request type using _search.
3. /api/update: Updates documents that match the provided query using _update_by_query.
The backend is deployed on Netlify and can be accessed at [elasticsearch-backend.netlify.app](elasticsearch-backend.netlify.app).

 ### Second Backend (Flask):
 I have developed an additional backend using Flask (Python), which mirrors the functionality of the Node.js backend. This backend supports all relevant API calls and maintains the same format and structured results as the Node.js version. 
The frontend can work with both backends since I made it so they support the same format and return identically structured results.

### Frontend:
The front-end is developed using React, and React Router, and styled with Material UI and Tailwind CSS. All API calls are made using Axios. The list of queries is generated dynamically, so to add new queries, you only need to update a JSON file with the new data—no code changes are required.

The front-end is also deployed on Netlify and can be accessed at [elasticsearch-frontend.netlify.app](elasticsearch-frontend.netlify.app).

---
## How to run:

### npm start
Start the Application
Starts the application using Node.js. The server will run as specified in ./bin/www.

### npm run dev
Development Mode
Runs the app in development mode using nodemon to automatically restart the server when changes are detected. Open http://localhost:3000 to view it in your browser.

### npm run build
Production Build
Builds the app for production using webpack. The build will be optimized for the best performance.

The build is minified, and the filenames include hashes.
Your app is ready to be deployed!
