
# Bowling Challenge
=================

Makers week 6 solo weekend challenge in JavaScript.

## My approach

My approach to this challenge was to create two classes, one for the frames and one for the bowling game. 

My goal was to create an interface that calculated the score of the frame and updated it depending if bonus points were needed to be added on. I found this quite complicated but managed to do it in the end. In hindsight i should have looked at an example scoreboard before going down this route, as i would have saved a lot of time and complexity. As a result, the code quality is not what i would like it to be.

## Technical Skills

- OOP
- DOM manipulation
- Jasmine
- TDD
- Debugging (following the flow and getting visibility)
- Console

## Screens

<img alt ='bowling scorecard' src ="https://raw.githubusercontent.com/frank-mck/bowling-challenge/main/images/Screenshot%202021-07-21%20at%2021.21.40.png"  width="600px" style="display: block;">

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

## How to use

To run tests
```
open SpecRunner.html
```
To open interface
```
open index.html
```
