# 🎬 Movies Inventory App

A web application for managing a movie inventory, organized by genre. Built with Node.js, Express, and PostgreSQL.

## Features

- Browse movies by genre
- Add, edit, and delete genres
- Add, edit, and delete movies
- Movies are organized under their respective genres

## Prerequisites

- Node.js
- PostgreSQL

## Getting Started

### 1. Clone the repository

git clone https://github.com/Iykekelvins/project-03-inventory-app.git
cd movies-inventory

### 2. Install dependencies

npm install

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the following:

PORT=8000
HOST=localhost
USER=postgres
PASSWORD=yourpassword
DATABASE=odin_movies_db
DB_PORT=5432

### 4. Set up the database

Make sure PostgreSQL is running, then run the setup file:

psql -U postgres -d odin_movies_db -f setup.sql

### 5. Start the app

node app.js

Then open your browser and go to `http://localhost:8000`

## Environment Variables

| Variable   | Description                        | Default   |
|------------|------------------------------------|-----------|
| PORT       | Port the app runs on               | 8000      |
| HOST       | Database host                      | localhost |
| USER       | PostgreSQL username                | postgres  |
| PASSWORD   | PostgreSQL password                | -         |
| DATABASE   | PostgreSQL database name           | movies_db |
| DB_PORT    | Port PostgreSQL runs on            | 5432      |

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Database:** PostgreSQL
- **Styling:** CSS
