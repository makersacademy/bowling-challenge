<p align="center">
<img src="https://github.com/joemaidman/bowling-challenge/blob/master/screenshots/logo.png"/>
</p>

Bowling Challenge is a front end javascript application that allows a user to score a game of ten pin bowling. Users are able to enter their score for each bowl and view a running score of both the frame and game. A demo of the application can be found at https://chitter-week4.herokuapp.com/

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count. 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus). 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## User Stories
```
As a game
So that I follow the rules
I want to have ten frames

As a game
So that I can continue
I want to start a new frame

As a game
So that I can be fair
I want to end the frame if the player gets a strike unless I am at frame ten

As a game
So that I can be fair
I want to end a frame after the second turn unless the player got a strike or I am at frame ten

As a game
So that the game doesn't go on forever
I want to end a game after ten frames

As a frame
So that I can follow the rules
I want to start with ten pins

As a frame
So that I can help keep track of the score
I want to store the number of pins knocked over by a ball

As a game
So that the player can play
I want to be able to bowl a ball

As a game
So that I can award bonus points after a strike in the previous frame in frames 1 to 9
I want to add the score of the next two balls to the score of the previous frame

As a game
So that I can award bonus points after a spare in the previous frame in frames 1 to 9
I want to add the score of the next ball to the score of the previous frame

As a game
So that I can award a bonus throw after a strike on the first ball of the tenth frame
I want to let the player bowl again

As a game
So that I can award a bonus throw after a strike on the first and second balls of the tenth frame
I want to let the player bowl again

As a game
So that I can award a bonus throw after a spare on the two balls of the tenth frame
I want to let the player bowl again

As a game
So the player can be proud
I want to report the score

As a game
If the player scored 0
I want to report a gutter game

As a game
If the player scored 300 points
I want to report a perfect game

As a printer
So that the player can see the current score
I want to report the current score of the game

As a printer
So that the player can see how the frame went
I want to report the score of the frame in a format the player will recognise
```

## Screenshots
**Scorecard**

![home](https://github.com/joemaidman/bowling-challenge/blob/master/screenshots/homepage.png)

## Technologies used

**Frontend**
- html
- CSS
- javascript
- jQuery

**Testing**
- jasmine

## Installation
- Clone the repo
- `cd` to the project folder
- Run `open `
- Create two local postrgresql databases called `chitter_development` and `chitter_test`

To test:
- `cd` to the project folder
- Run `open SpecRunner.html`

To run the application locally:
- `cd` to the project folder
- Run `open public/index.html`

## Potential feature improvements
* Score more than one player.
* Name players
* Add game functionality.
* Refactor printer logic.
