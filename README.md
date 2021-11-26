Bowling Challenge in JavaScript :bowling:
=================

- Feel free to use google, your notes, books, etc. but work on your own
- If you refer to the solution of another coach or student, please put a link to that in your README
- If you have a partial solution, still check in a partial solution
- You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD PROGRAM. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player. For this challenge, you do _not_ need to build a web app with a UI, instead, just focus on the logic for bowling (you also don't need a database). Next end-of-unit challenge, you will have the chance to translate the logic to Javascript and build a user interface.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### My Approach

```
As a player
I want the scorecard to have my name
So I know the scorecard is mine

As a player
I want to be able to enter my roll score 
So I can record my score

As a player
I want a second roll if I don't get all ten pins on my first attempt
So I can try to knock all ten pins down

As a player
I want play ten frames
So I can complete a game of bowling

As a player
I want to see my score after ten frames
So I know how well I've done

As a player
I want to have a third roll if I get at least ten pins down on my first two attempts
To roll for a perfect game
```
