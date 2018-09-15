Bowling ScoreCard
=================

Introduction
------------

This program keeps track of a players score when bowling
Users Enter their scores as they play a game and the program will calculate the total.

Scoring
-------

* Games consist of 10 rounds
* Players can knock down up to 10 pins in a round
* When a Player hits all ten pins in two bowls it is a Spare
  * When a Spare is scored the next bowl is added to that round score.
* When a player hits all ten pins in the first bowl it is a Strike
  * When a Strike is scored the next 2 bowls are added to that round score.
* A Spare or Strike scored in the last round allows the player another 1 or two bowls respectively
  * Round 10 can have a maximum of three bowls
* Each Round can have a maximum of 30 points
* The maximum possible score (perfect game) is 300

insert scorecard img here

Code
----

Written in JavaScript

Classes
  * Round
    * tracks pins nocked down for up to 2 bowls
    * knows if it's a spare/strike
    * has an id for round ?
  * Card
    * contains ten rounds
    * totals score between rounds
    * adds proceeding bowls scores for spares/strikes
