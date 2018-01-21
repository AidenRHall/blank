# SkyCast

SkyCast is an app for searching and displaying the forecasted and historic weather for selected locations. 

Hosted on Heroku: [HERE](http://nathanskycast.herokuapp.com/#/)
The frontend and backend are hosted seperately on Heroku's free plan, so the app will take 30-40 seconds to load if it has not been accessed within the past 30 minutes. (15 seconds for the frontend, 15 seconds for the backend)

  - Built with a React/Redux frontend
  - Hooks into a backend built with the Express JavaScript framework for authentication, storing search histories, and making weather api requests 
  - Uses Darksky API for weather information and Google Maps API for location suggestions
  - Uses ES7 JavaScript syntax to make code more readable, especially for asynchronous code (async / await)

# Requirements

User can enter location and get the current and future forecast:
  - Google maps autocomplete gets location data from suggested user input
  - A widget shows current data information and is color coded to show a different color background based on the time of day.
  - Animated Skycon icons show weather conditions at a glance
  - A homemade table shows future daily and hourly weather information
  - A Google chart tracks daily temperature highs and lows, and humidity
  - uses the darksky weather api 
 
Users can see weather history via charts: 
  - A calendar widget allows users to select any date in the past, and view weekly and hourly information for that date 
  - Makes separate weather api calls for each day of the week, because a historical request from Darksky only contains data for a single day
  - uses the same UI components as the current weather display

Users can track their search history:
  - Users can create permanent accounts, if they are logged in their search locations are saved to a database
  - Authentication and signup features custom error validation messages
  - Security is supported by the passport and bcrypt authentication libraries 

### Tech

Frontend

* ReactJS - Library for building UIs
* Create React App - awesome React boilerplate 
* Redux - State container 
* React Infinite Calendar - date picking calendar
* React Places Autocomplete - React wrapper for Google maps autocomplete 
* React Router - Enables routing
* Axios - for connecting to backend
* Google Charts - for displaying humidity and temp chart
* React Skycons - wrapper for Darksky canvas-based weather icons

Backend

* Express - node.js app framework
* Passport - authentication middleware
* Sequelize - Object relational mapping system
* BCrypt - hashes/salts/and compares passwords
* Postgres - relational database 
* Axios - for connecting to the weather api