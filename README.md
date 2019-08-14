# Hobby with Friends

## Links
* [Live App](https://hobby-with-friends.adrianslolacc.now.sh)
* [Github](https://github.com/amichot/hobby-with-friends)
* [API Github](https://github.com/amichot/hobby-with-friends-api)


## Git Setup 

### Client
* git clone https://github.com/amichot/hobby-with-friends.git <br>
* npm install
* npm start <br>
Runs the app in the development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br>
note: client is setup to connect to live server. <br>


### Server
* git clone https://github.com/amichot/hobby-with-friends-api.git
* npm install
* npm run dev (to start server locally, server will reload if you make edits) <br>
* notes: server is setup to connect to live PostgreSQL database. <br>
Migrations are available if you choose to create your own PostgreSQL server. <br>

## Description
Hobby with Friends is designed to connect you with others that enjoy similar interests. Have you ever showed up to your college gym looking for a pick-up game of basketball to find it empty? This app excels at keeping you connected and organized. With a quick search you can find an event that suits you. Start by creating an account, then head over to your profile page to add your interests. Your home page will show you the events you created along with events that match your interests. Search for events around you, find the one you like click the title to view the full details of the event, then hit the join button to let the event owner you will be attending. Creating an event has never been easier, simply fill out the form and tell your friends about the website.

### future updates
* event comment section
* event reminders
* view other users profiles

## Technologies Used

### Client

*   HTML
*   CSS
*   Javascript
*   React

### Server
* Express.js
* PostgreSQL
* Knex
* jwt-auth
