[![Build Status](https://travis-ci.org/haletothewood/bowling-challenge.svg?branch=master)](https://travis-ci.org/haletothewood/bowling-challenge)

Bowling Challenge
=================

## Gameplay

<p align='center'>
<img align='center' src='images/gamePlay.gif'>
</p>

## The Brief

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## My Approach

Although I had only been learning JavaScript for a matter of days I was able to use my experience with object oriented design to break down the task using the requirements of the application provided by Makers and by diagramming using CRC Cards. This allowed me to begin with a clear idea in mind which was to separate out responsibilities. I feel I achieved this to a point but could have achieved a much better separation upon review.

Upon completion of my business logic I implemented jQuery with HTML and CSS to achieve a satisfactory game play functionality. I am beginning to feel much more confident with styling and enjoyed the process of connecting jQuery with the game.

I set up ESlint and used it in combination with a VSCode extension called beautify to clarify syntax and highlight errors. Finally I set up a Travis build to run tests.

## Technologies Used
* JavaScript
* Jasmine
* jQuery
* ESlint
* Node JS
* Travis

## Bowling — how does it work?

For the rules of bowling you can check out this [link](https://www.playerssports.net/page/bowling-rules). 

The main difficulties with the implementation of the rules are the bonuses for strikes and spares and the possible addition of a 3rd bowl in the final frame.


