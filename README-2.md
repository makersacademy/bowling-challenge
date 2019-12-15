# Bowling Challenge


<!--
## Contents

- [Domain modelling](#domain-modelling)
- [Database structure](#database-structure)
- [Still to be completed](#still-to-be-completed)
- [Features](#features)
- [Code style](#code-style)
- [Tech used](#tech-used)
- [Getting started](#getting-started)
- [Database setup](#database-setup)
- [Test database setup](#test-database-setup)
- [Running the tests](#running-the-tests)
  - [Test coverage](#test-coverage)
- [Credits](#credits)

## Domain modelling

| User class | Peep class |
| ---- | --- |
| ```@email``` | ```@id``` |
| ```@password``` | ```@content``` |
| ```@user_name``` | ```@created_at``` |
| ```@user_handle``` | ```@user_id``` |
| ```@created_at``` |  |
| ```@user_id``` |  |
| ------------- | ------------- |
| ```.create``` | ```.create``` |
| ```.authenticate``` | ```.all``` |  

## Database structure

**Table: users**

user_id | user_name | user_handle | email | password | created_at |
| ----- | --------- | ----------- | ----- | -------- | ---------- |
| 1 | Debbie Handler | The Real Debs | debbie@test.com | dkfg14   | 2019-12-08 21:02:31.579223 |
| 2 | Joan Peeler    | JoJo          | jojo@test.com   | j450pl   | 2019-12-08 21:02:31.579223 |  

**Table: peeps**   

| id | content | created_at | user_id |
| -- | ------- | ---------- | ------- |
| 1 | Hello World! | 2019-12-08 21:02:55.919516 | 1 |
| 2 | Pancake Palour has the the best breakfast menu! | 2019-12-08 21:02:55.919516 | 2 |
| 3 | I just read the most interesting article. | 2019-12-08 21:02:55.919516 | 2 |  

## Still to be completed

**Final step**  
- [Thermostat: saving state](https://github.com/makersacademy/course/blob/master/thermostat/saving_state.md)

## Features
- Increase temperature
- Decrease temperature
- Reset temperature
- View energy usage level
- Switch power saving mode on and off
- Select a city and view its current temperature

## Code style
- OOD
- TDD
- AJAX

## Tech used

- JavaScript
- Jasmine
- jQuery
- HTML  
- CSS

## Getting started

To open in web browser, run ```open index.html``` in the terminal in the thermostat_js directory.

## Database setup

- Connect to ```psql```
- Create the database using the ```psql``` command ```CREATE DATABASE chitter_database;```  
- Connect to the database using the ```pqsl``` command ```\c chitter_database;```  
- Run all the queries we have saved in the folder ```db\migrations\```  

## Test database setup

- Connect to ```psql```
- Create the database using the ```psql``` command ```CREATE DATABASE chitter_test_database;```  
- Connect to the database using the ```pqsl``` command ```\c chitter_test_database;```  
- Run all the queries we have saved in the folder ```db\migrations\```  

## Running the tests  

To run tests in the web browser, run ```open SpecRunner.html``` in the terminal in the thermostat_js directory.

### Test coverage  
#### Unit tests

- has a starting temp of 20 degrees
- doesn't go lower than 10 degrees
- increases the temp by 1 when using up function
- decreases the temp by 1 when using down function
- resets the temp to 20 degrees
- shows energy usage levels
  - shows 'medium-usage' when temp is >= 18 but < 25
  - shows 'low-usage' when temp is < 18
  - shows 'high-usage' when temp is >= 25
- is set to power saving mode by default
- has a maximum temp of 25 when PSM is on
- has a maximum temp of 25 when PSM has been switched off and turned on again
- has a maximum temp of 32 when PSM is off

## Credits
- Weather API from [OpenWeather](https://openweathermap.org/api)
- CSS design of thermostat graphic by [Tommy Creenan](https://codepen.io/TommyCreenan/pen/pCslj/)
- Page design inspired by [Dr Strangelove poster](https://www.mondographics.net/en/movie-poster/dr-strangelove-stanley-kubrick-18-x-24-in-43853) by designer Jason Munn. -->
