
Bowling Challenge
=================

### Bowling Scorecard ###

This is a javascript programme to work out the score for a game of bowling.
Currently only works in the console. 
Open scorecard.html and use the console to work out the score:
  `scorecard = new Scorecard`
  `scorecard.addScore(x)`
  After twenty moves have been added, use:
  `scorecard.getTotal`

### To Do ###

Add interface and styling so it can be used in the browser instead of just the console

### Plan 

As a user
So I can record my score
I want to add my first score to the scorecard

As a user
So I know my current score
I would like to see my current score displayed 

As a user 
So I know where I am in the game
I want to see the current frame  

As a user
So i don't have to calculate my own bonuses
I want the scorecard to keep track of any bonuses from strikes or spares

As a user
So I know my total score
I want to see my final score 

As a user 
So I know how well I played 
I want to see the scores for each frame 

### Rules 

>A game has ten frames.

>Each frame the player has two rolls to knock down as many of the ten pins as they can.

>If a played fails to knock down all the pins, their score for that frame is the sum of the number of pins knocked down.

>If a player knocks all the pins down on their first roll, they score a strike.

>If the player knocks down all ten pins with two rolls, they score a spare.

#### Strikes 

>If a player scores a strike, the frames ends with their first roll. They receive a score of ten, plus a bonus, which is the sum of their next two rolls.

#### Spares 

>If a player scores a spare, they receive a score of 10, plus a bonus, which is the score of their next roll.

#### Final Frame

> If a player rolls a spare in the final frame, they receive an extra roll. 

> If they roll a strike, they receive another two rolls. 

>There are no more than three rolls in the final frame. 

#### The perfect game 

> The highest score possible is 300; 10 strikes, with two bonus rolls that are also strikes. 

#### Gutter Game

> If a player fails to knock down any pins in their 20 rolls, they have played a gutter game. 

