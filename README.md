
Bowling Challenge
=================

![Screenshot1](http://i.imgur.com/DJN27EI.jpg)
![Screenshot2](http://i.imgur.com/Y5qPK5w.jpg)
![Screenshot3](http://i.imgur.com/v2H7I7V.jpg)
![Screenshot5](http://i.imgur.com/uqIl26K.jpg)

How to run the app
-----------------
Clone the repo, install the packages and run the server using nodemon. For example:
````
$ git clone git@github.com:stephengeller/bowling-challenge.git
$ cd bowling-challenge
$ npm install
$ nodemon
````
You can also access the app on [my website](http://www.stephengeller.co.uk/bowling) (but beware, bugs!).  

Technologies used
----------------
  - TDD: Jasmine, Mocha, Chai, ZombieJS, TravisCI, ESLint
  - Server: ExpressJS, Nodemon, Heroku
  - Design: CSS, HTML, Bootstrap
  - Views: EJS
  

Approach to solving the challenge
---------
This challenge was a result of two weekends of work, which was divided into Javascript (week one) and ExpressJS (week two). After struggling with bowling logic, I used [this tutorial](https://www.youtube.com/watch?v=-qA_MjNmpVU&t=37s)as a reference to drive my model creation. 

I subsequently developed a basic UI with JQuery, but decided to re-create it using ExpressJS and EJS pages. This was because I wanted to make thorough feature tests using Zombie, Mocha and Chai, but still kept my unit tests in the file using Jasmine.

Once all the desired elements were rendered and interactive in the 'play' view - and edge cases were addressed - I refined the layouts to make them more user-friendly, such as removing buttons that would be invalid to be pressed (like bowling a 8 after a 4 as there are only 6 left).

Difficulties
---------
The main difficulties in this challenge were translating concepts and functionality from other MVC models (like Sinatra) to ExpressJS, as well as learning how to use CSS and Bootstrap for the first time.

Future Developments
------------------
  1. Formatting frames into actual bowling frames
  2. Rendering multiple games at once
  3. Saving totals / frames to a database
