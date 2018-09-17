
Bowling Challenge - JavaScript
=================

## Introduction

Count and sum the scores of a bowling game for one player.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## How to use

Copy the path of `ConsolePlay.html` into the client of your choice.
Using console commands you can start a new scorecard and add bowls. The console logs currently in the `playGame.js` will output the results of each bowl.

#### Example

Commands to enter are as an example `newGame = new PlayGame` and add your knocked down pins as `newGame.enterBowl(4)`. Keep entering bowls until the game is over.

```
> newGame = new PlayGame  
PlayGame {}
> newGame.enterBowl(4)
Current Frame: 1
Latest Bowl: 4
Score: 4
```

#### Edge cases

The game will not let you enter more than 10 in any one frame and currently will give you feedback in the console if the entered pin number is wrong. It also checks when the game is over, returning the score and resetting all the variables ready for a new game.

#### Scoring
Scoring is calculated correctly for a bowling game although currently the individual scores do not fit exactly with the delayed display that is normal for bowling scoring. When a multiple strikes or a spare are scored normally the displayed score waits until the double scores are bowled before displaying the score. My scoring correctly scores but this delay is not apparent in the code yet.

## Testing

Testing is completed using `jasmine-3.2.1`

copy the path for `SpecRunner.html` in your client and the tests will complete.

## My thoughts

Although the actual scoring code is relatively short, I found designing for all the edge cases took a lot of time and planning.

The scoring part of the code involved looping through an array of bowls entered and delivering the score. This loop worked and even produced the right outcome for the 10th frame. I had to make a function that would return a 0 as the loop was checking beyond the stored bowls in the array and was returning NaN. If it was NaN i made it return a 0.

I would like to add the proper bowl to bowl scoring that is normally displayed and a GUI.
