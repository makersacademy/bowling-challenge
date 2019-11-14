How To Play!
=================

* Clone the github repo to your own local repository
* Run the SpecRunner.html in order to check the tests
* Run index.html in your favourite browser to check your bowling score!
* One note - the game is not yet validated - for that reason please enter in 0's where you have rolled a gutterball

Bowling Challenge
=================

This is my attempt at the very famous *Bowling Game Kata* - designed to test both logical thinking and TDD. The user story was very simple-

```
As a bowler
So I can what score I've got
I want to be able to enter my scores into a scorecard and recieve my sore
```

I was primarily tasked with building the logic for the game in Javascript. After several different iterations I found a solution that I was pleased with - and one that was relatively simple to read. Further to this I then built a fully functional front-end where users can type in their scores and get their total score in return

### Screenshots

<img src="images/game_logic.png?" width="400px">

A screenshot of the game logic - I tried to follow SRP and DRY principles as much as possible

<img src="images/slicing_the_array.png?" width="400px">

In order for my application I needed to take the entered numbers and turn them into an array of arrays - this shows you how I did it

<img src="images/front_end.png?" width="400px">

A simple front-end allowing users to enter in their scores

<img src="images/tests.png?" width="400px">

A small shot of the testing spec

<img src="images/passing_tests.png?" width="400px">

20/20 passing tests

Technologies Used
-----

* HTML
  * The application used HTML as the markup language to display it in the browser 
* CSS
  * I used a little bit of CSS to style my HTML page
* Javascript
  * I built my application back-end logic with Javascript 
* JQuery
  * I used Jquery to get easy access to the *submit* button in the HTML
* Jasmine
  * All my tests were ran in Jasmine 

```

How To Play!
-----

* Clone the github repo to your own local repository
* Run index.html in your favourite browser to check your bowling score!
* One note - the game is not yet validated for incorrect information that users enter - for that reason please enter in 0's where you have been unfortunate enough to roll a gutterball!

Tests
-----

Open the SpecRunner.html file in your browser of choice in order to run the tests