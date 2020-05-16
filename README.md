
Bowling Challenge
=================


## Overview

Fork this repo, run bundle and open index.html in your browser. It is created using HTML, CSS and Javascript, with Jasmine testing.

------------

For this project i made an html scorecard where you can input your bowling score and it will give you your score, broken down into frames.

It flashes a message each go, depending on what happens. These messages include:

 - Gutterball
 - Perfect
 - Strike
 - Spare
 - Game over
 - Correction (if a user changes a score theyve already entered)
 - Random general encouragement if none of the above qualify.

--------

Overall I was very happy with the outcome. It works very well, allows for corrections and updates instantly and as far as I am aware has no real bugs.

However, I seem to keep putting my code outside of the classes. The 'Game' class in this is essentially non existant. There is a lot of functionality in my 'interface.js', that should definitely be in the game class. Mainly the following:
 
 - Score calculation - both total and frame scores.
 - Messages, deciding which message to put to the user.

