# Bowling Challenge

Bowling Challenge is a JavaScript bowling score calculator. It counts and then sums the scores of a bowling game for one player.

## About

This is a weekend challenge from week 6 of the Makers Academy bootcamp. The focus of this challenge is to gain the ability to test-drive a simple Javascript program using Node, to write high-quality code and apply a coherent process when learning a new language.

## User Story

```bash
As a player
So that I can find out how well I played
I would like to know the final score of my bowling game
```

## Features

- The calculator uses the rules of ten-pin bowling to calculate a player's score.
- The calculator generates a final score for a player's game that consists of ten frames.
- The scores for the player's game are inputted as nested arrays.

## Bowling Rules

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame, they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).

    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

More about ten pin bowling here: https://www.myactivesg.com/sports/bowling/how-to-play/bowling-rules/how-are-points-determined-in-bowling and http://en.wikipedia.org/wiki/Ten-pin_bowling

## Inputs and Outputs

The calculator can generate the final score for the following games:

| Game type                                      | Input                                                                         | Output           |
| ---------------------------------------------- | ----------------------------------------------------------------------------- | ---------------- |
| Gutter game                                    | [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]         | Final Score: 0   |
| A game with only one frame                     | [5,2]                                                                         | Final Score: 7   |
| A game with multiple frames                    | [1,1],[2,2],[3,3]                                                             | Final Score: 12  |
| A game with no spares or strikes               | [1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]         | Final Score: 20  |
| A game that includes one spare                 | [1, 1],[6, 4],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]         | Final Score: 29  |
| A game that includes one strike                | [1, 1],[10],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]           | Final Score: 30  |
| A game that includes multiple spare            | [0, 0],[6, 4],[3, 7],[5, 5],[1, 1],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]         | Final Score: 41  |
| A game that includes multiple strikes          | [0, 0],[10],[1, 1],[10],[2, 2],[10],[3, 3],[0, 0],[0, 0],[0, 0]               | Final Score: 54  |
| A game with a spare scored in the tenth frame  | [1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[10], [1], [1] | Final Score: 30  |
| A game with a strike scored in the tenth frame | [1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[5, 5], [6]    | Final Score: 34  |
| Perfect game                                   | [10],[10],[10],[10],[10],[10],[10],[10],[10],[10]                             | Final Score: 300 |

## Technologies

This project was created with:

- Npm v8.12.2
- Node v18.4.0
- Jest v28.1.2

## Getting Started

To clone and run this project, you will need to enter this into your command line:

```bash
# Clone this repository
$ git clone https://github.com/Aisha-Yusuff/bowling-challenge-JavaScript.git

# Go into the repository
$ cd bowling-challenge-JavaScript

# Install npm
$ npm install

# Initialise the NPM project (this will create a file package.json)
$ npm init -y

# Add the jest package to your project
$ npm add jest

# Also install jest "globally"
$ npm install -g jest
```
