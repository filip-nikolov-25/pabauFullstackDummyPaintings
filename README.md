
This is a full-stack project built with a separate front-end and back-end using Node.js, Express, and PostgreSQL for the database.

This read-me file includes all necessary configurations to run the application locally on your machine.

Prerequisites
Before you can run the project, make sure to have the following installed on your machine:

Node.js - Required for both front-end and back-end.
PostgreSQL - Database setup for the project.
Nodemon - A utility that monitors for changes 

Instructions

-Clone the Repository
git clone https://github.com/yourusername/pabauFullstack.git
cd pabauFullstack

--Frontend Setup
cd frontend
npm install

--Backend Setup
cd ../backend
npm install

-- Database Setup
Ensure PostgreSQL is installed locally and running on your machine.

Open PostgreSQL and create the Products database.
-CREATE DATABASE Products; 

Run this queries:

-- CREATE TABLE paintings (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image TEXT
);


-- INSERT INTO paintings (name, price, description, image) VALUES
('Starry Night', 299.99, 'A mesmerizing swirl of colors that captures the beauty of the night sky.', 'https://picsum.photos/seed/starrynight/300/200'),
('The Persistence of Memory', 199.99, 'A surreal masterpiece featuring melting clocks that challenge the concept of time.', 'https://picsum.photos/seed/persistence/300/200'),
('Mona Lisa', 499.99, 'A timeless portrait known for its enigmatic smile and artistic perfection.', 'https://picsum.photos/seed/monalisa/300/200'),
('The Scream', 159.99, 'An iconic expression of existential dread and anxiety in vibrant hues.', 'https://picsum.photos/seed/thescream/300/200'),
('Girl with a Pearl Earring', 189.99, 'A captivating portrait that highlights the beauty of simplicity and mystery.', 'https://picsum.photos/seed/pearl/300/200'),
('The Last Supper', 599.99, 'A dramatic and detailed depiction of Jesus and his disciples at the final meal.', 'https://picsum.photos/seed/lastsupper/300/200'),
('The Birth of Venus', 349.99, 'A mythological scene illustrating the goddess Venus emerging from the sea.', 'https://picsum.photos/seed/venus/300/200');


--Update Database Credentials
In the backend folder, find the database client configuration file db.js. Update the following:

const dbClient = new pg.Client({
    user: "your username", -- Replace with your PostgreSQL username
    host: "localhost", //example
    database: "Products", // created previously !!! with this queryCREATE DATABASE Products;
    password: "___",      -- Your PostgreSQL password
    port: "5432"         
});


--Install Nodemon for Development Mode
To run the app in development mode, you need to install nodemon globally:
npm install -g nodemon

--Running the Application
Backend
To start the backend server in development mode (with auto-reload):

cd backend
npm start

Frontend
To start the front-end server:
cd frontend
npm run dev
