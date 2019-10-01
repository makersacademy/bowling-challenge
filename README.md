
Bowling Challenge
=================

This challenge is to develop a <strong>bowling scorecard</strong> that count and sum the scores of a bowling game. Details of instructions can be found [here](https://github.com/makersacademy/bowling-challenge).

### Instructions
- There are 10 frames in a game;
- User input the rolls -- each player can roll 1 - 2 times each frame, which depends on strikes and spares;
- Scoring system:
```
Score = number of knocked down pins + bonuses for strikes and spares
```
Bonuses are counted as follow:
```
Strikes: knocks down all 10 pins with the first roll in a frame.
Bonus = number of knocked down pins in next 2 rolls (next frame)  
```
```
Spares: knocks down all 10 pins with 2 rolls.
Bonus = number of knocked down pins by next roll (next frame)
```
```
10th frame: rolls a strike or spare, player can have additional rolls but no more than 3 (include also bonus for the regular strike/spare).
```

### Planning
1) Make a diagram that help in planning Classes and Methods .
A simplified illustration of the expected  responsibility of each class in a bowling game:

| Class | Method |
|:----|:----|
|Game| countFrames, countScore, checkBonus|
|Frame| countRolls, countPins|

2) constraints:

|Object| Range|
|:----|:----|
|Frame| 1-10|
|Rolls| 1-2, and 1-3 on 10th frame|
|Pins| 0-10|


### Technical Approach
- TDD in JavaScript with Jasmine testing framework
- Create interactive animated interface with jQuery.

The user interface contains button

## Instructions

<b> User Interface</b>
Click the buttons for pins knocked down. Notice, you will not be able to knock down bore than 10 pins in the same frame. The frame number and total score will be displayed at the top of the scorecard, and new frame will be automatically generated after 2 rolls. The score card shows total score of the frame and the pins knocked down from each roll is showed on right-top corner. Bonus point will be updated to the corresponding frame score (one frame before). Refresh the page for a new game.

![User Interface](./images/Screenshot_UI02.png)


<b> Business Logic</b>
- start a bowling game by `var game = new Game ()`;
- start the game by `game.roll(pins)`, enter the number of pins knocked down at (pins);
- Each frame allows only maximum of two roll, unless at 10th frame. An error message will show if attempts third roll within a frame.
- Type `game.endFrame()` to end a frame and followed by `game.newFrame()` to start a new frame. Roll again and repeat same steps until you reach 10th frame.
- from 2nd frame onwards, user can use `game.countBonus()` after `game.endFrame()` to claim the strike bonus or spare bonus.
