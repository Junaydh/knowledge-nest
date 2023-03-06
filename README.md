Knowledge Nest
=========

##Final Product

Knowledge Nest is an education hub with a structure reminiscent of Pinterest. allowing users to keep track of their educational resources via a feed, posting, liking and commenting on resources. 

It uses a Postgres database on the backend which it actively queries.

Some key features include:

- Users are able to login and out, setting their cookie session and hashing passwords with bcrypt when doing so.
- Users can view all posts (limited to 10 at a time) on the main feed.
- Users can post new resources where they can add all resource elements and add them to the database.
- Users can add tags to posts they create.
- Search for existing resources with keywords and tag names.
- Like/rate any resource on the main feed.
- View and edit their profile details.

## Dependencies

  - bcrypt
  - bootstrap
  - chalk
  - cookie-session
  - dotenv
  - ejs
  - express
  - morgan
  - pg
  - sass"
  - Node 10.x or above
  - NPM 5.x or above
  - PG 6.x


## Getting Started

- Start your postgres server in your terminal
- Create a data base called ```midterm``` and run ```node bin/resetdb.js``` to create all the tables and seed all the pre-   set data.
- Install all dependencies (using the ```npm install``` command).
- Run the development web server using the ```npm run local``` command.

