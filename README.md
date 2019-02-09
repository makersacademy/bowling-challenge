
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
|Frame| countRolls, countScore|
|Score| countPins, checkBonus|

2) constraints:

|Object| Range|
|:----|:----|
|Frame| 1-10|
|Rolls| 1-2, and 1-3 on 10th frame|
|Pins| 0-10|


### Technical Approach
- TDD in JavaScript with Jasmine testing framework
- Create interactive animated interface with jQuery.
