
Bowling Challenge
=================

![Screenshot1](http://i.imgur.com/DJN27EI.jpg)
![Screenshot2](http://i.imgur.com/undefined.png)
![Screenshot3](http://i.imgur.com/undefined.png)
![Screenshot4](http://i.imgur.com/v2H7I7V.jpg)
![Screenshot5](http://i.imgur.com/IKe8JWd.jpg)
![Screenshot6](http://i.imgur.com/ZVPUnpO.jpg)

How to run the app
-----------------
Clone the repo, install the gems and run the server using nodemon. For example:
````
$ git clone git@github.com:stephengeller/bowling-challenge.git
$ cd bowling-challenge
$ npm install
$ nodemon
````
You can also access the app on [Heroku](http://bowlinggame-sg.herokuapp.com/) (but beware, bugs!).  


Approach to solving the challenge
---------
To complete this, I knew I needed to combine many new tools discovered in the past week. This included using HTML, setting up a server and injecting ruby in erb (embedded ruby) files.

I struggled with the new material this week, so decided to focus on the more familiar class-to-class interactions first, then move onto the less-familiar server creation work after. This actually helped to clarify what methods would need to be called to operate the game, and so it just became a case of integrating those methods into the controller and views.

Difficulties
---------
The difficulties found in this challenge were similar to those experienced earlier in the week - namely setting up a server.
  1. Sharing variables across views
  
  One area I am yet to fully understand is how variables work in a sinatra environment. Some challenges in sharing variables (such as receiving a name on the homepage and rendering it on different pages) were previously circumvented by using global variables, but I was aware that this was not good practice. I ultimately ended up using sessions to store variables and states, and - with plenty of trial and error - got them to behave as intended.
  
  2. Testing random behaviour
  
  I initially assumed that it would be impossible to test random output, and so I decided not to try and test said impossible task. However, I made eventually aware of a way of doing this after reading through the code review rubric, and so I was eventually able to predict and test randomised functions.  

Future Developments
------------------

  1. More formatting! Less tacky backgrounds!
  2. More personal statistics (eg "You have played 'rock' 7 times with a 40% win rate")
  3. Multiplayer!

Learning points
---------

  1. Keeping your controllers skinny doesn't mean you should overload your views.
  2. Think about which variables need to be where in the controller, and how they behave