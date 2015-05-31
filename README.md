Bowling Challenge
=================

Summary
=================

* Create a scoreboard that can count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

[Live Bowling Game](https://peaceful-sierra-7402.herokuapp.com/)

How to run
----

* For web viewing, simply follow the link to the website hosted on heroku
* For local use, clone or fork the repo to your local machine
* Install sinatra and shotgun gems to view on your local host
* Tests can be run by installing jasmine and opening the SpecRunner.html in your local browser


Checklist
----

- [x] Scores a basic 10 frame, 20 roll game (no half strikes or strikes)
- [x] Handles scoring for half strikes
- [x] Handles scoring for strikes
- [x] Handles additional rolls in final frame
- [x] Calculates a perfect score
- [x] Provides a simple, tabular UI where user can bowl with a randomised number of pins knocked down with each click and have score tracked

Technologies used
----

* Production - Javascript, jQuery, Ruby, CSS (using Bootstrap),HTML, Sinatra, Heroku
* Testing - Jasmine, Rubocop, Coveralls

Screenshots
----

![Front Page](https://github.com/AlexHandy1/bowling-challenge/blob/master/public/images/Bowling-challenge-front-page.png)

Further Features
----

* Implement full front-end feature testing - currently just unit testing underlying system
* Include more advanced graphical interface for tracking score e.g. X for a strike, / for half strike, individual roll scores etc
* Develop a more robust random score generator allowing greater probability for high scoring