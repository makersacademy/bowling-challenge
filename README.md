
Bowling Challenge
=================

[Check project online](http://bowling_md.surge.sh/)

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

Technology used:
-----

* Front-end: Javascript, jQuery, HTML, CSS
* Back-end: Javascript
* Testing: Jasmine

Run project:
-----
* Local on your machine: Clone this project, use [http-server] or open ```index.html``` in Browser.
* Onlinel: use this [link](http://bowling_md.surge.sh/)
* In order to run tests, clone project, install node JS and open file ```index.html``` in Browser.
* In order to see if tests are passing, open console in View --> Developer Tools.

Result:
-----

The app has 4 classes:

1. interface - class is responsible for interacting with the user and run the game depending on which button user have clicked.
2. game - class Game contains information about frames. It is responsible for handling the logic about the game: dependencies between rolls and frames, calculating the total score, and finishing the game.
3. frame - class Frame is responsible for generating a new frame. The frame contains information about rolls, bonus rolls and a number of the frame.
4. roll - class Roll is responsible for generating a new roll with a number of scores, frame number, and roll number.

Reflection:
-----

I had two attempts to write the logic for the bowling game.
At first place, I did not realize that the logic in the game and dependencies inside the game are much more deeper and more complicated than I thought.
My first attempt you can find in folder ```src``` file bowling.js. You can see that I tried to write the bowling logic based on requirements straight away. And as far I went, I missed logic more and more. I was confused and struggled with not understanding dependencies between Scores and Bonus Scores. 
So, I decided to re-start it from the very beginning. First of all, I have began with writing a good plan and tried to split bowling game into classes. It appeared much easier and that time I could see the clear dependencies between Rolls and Frames, Scores and Bonus Scores.
If I had started with diagramming the project first and write a plan, it would have saved me the half of time I have spent on this project.
