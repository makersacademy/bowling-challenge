Bowling Challenge in Ruby
=================

## The task
Count and sum the scores of a bowling game for one player. For this challenge, you do _not_ need to build a web app with a UI, instead, just focus on the logic for bowling (you also don't need a database). Next end-of-unit challenge, you will have the chance to translate the logic to Javascript and build a user interface.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD PROGRAM. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.

## Focus for this challenge
The focus for this challenge is to write high-quality code.

In order to do this, you may pay particular attention to the following:
* Using diagramming to plan your approach to the challenge
* TDD your code
* Focus on testing behaviour rather than state
* Commit often, with good commit messages
* Single Responsibility Principle and encapsulation
* Clear and readable code

## Installation
```
$ git clone https://github.com/LGretzk/bowling-challenge-ruby.git
$ cd bowling-challenge-ruby
$ npm init -y
$ npm add jest
$ npm install -g jest (if jest not installed globally)
$ jest
```

## Running the tests
```
jest
```

## Planning
1. Started by drawing the diagram of the game to be able to understand the rules better.

![game-diagram](https://dl.dropboxusercontent.com/s/xhilft3sednr1x0/diagram%20-%20game.png?dl=0)

2. Took a step back and re-read the requirements. Realised that having a working game is not necessary for the completion of the task.
3. Started thinking about how the scoring system could be tested. Decided to input the array of user scores for the whole game, as opposed to for each frame individually.
4. Knowing how to test the scoring method allowed me to quickly progress through the tests and increase complexity. 
5. Made a new diagram detailing the scoring system. This helped with understanding the logic of the 10th frame scoring.

![scoring-diagram](https://dl.dropboxusercontent.com/s/q5hrx6phjuuay7w/diagram%20-%20scoring1.png?dl=0)

![scoring-diagram](https://dl.dropboxusercontent.com/s/47zwq5yyv08xbzn/diagram%20-%20scoring2.png?dl=0)

## Testing
First, tested a simple array of scores excluding the 10th frame.
- Scores without any strikes or spares.
- Scores with a strike.
- Scores with a spare.
- Scores with a strike and a spare.
- Scores with a spare and a strike.
- Gutter game, all zero scores.

Then, added the 10th frame logic.
- Scores with 10th frame strike.
- Scores with 10th frame spare.
- Perfect game, maximum score.

## Snippet of the input /output table for the 10th frame

[10,0] - 10th frame strike - roll 1  
[10,10] - bonus roll x2 - roll 2, roll 3 >> max 30 points  

[10,0] - 10th frame strike - roll 1  
[2,8] - bonus roll x2 - roll 2, roll 3 >> 20 points

[10,0] - 10th frame strike - roll 1  
[3,5] - bonus roll x2 - roll 2, roll 3 >> 18 points

[5,5] - 10th frame spare - roll 1, roll 2  
[6,x] - bonus roll - roll 3 >> 16 points

[5,5] - 10th frame spare - roll 1, roll 2  
[10,x] - bonus roll - roll 3 >> 20 points


## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## Technologies used
* JavaScript
* Jest
