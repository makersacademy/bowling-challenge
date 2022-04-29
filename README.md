# Bowling Challenge (JavaScript)
```
 _____________________________________________________________
|__1__|__2__|__3__|__4__|__5__|__6__|__7__|__8__|__9__|__10___|
|   |X|  8|/|  3|6|   |X|  9|/|  8|/|   |X|  9|/|  9|G|  X|X|X|
|  20 |  33 |  42 |  62 |  80 | 100 | 120 | 139 | 148 |  178  |
'-----'-----'-----'-----'-----'-----'-----'-----'-----'-------'
 ____________________________________________________________
|__1__|__2__|__3__|__4__|__5__|__6__|__7__|__8__|__9__|__10__|
|   |_|   |_|   |_|   |_|   |_|   |_|   |_|   |_|   |_|  |_|_|
|     |     |     |     |     |     |     |     |     |      |
|_____|_____|_____|_____|_____|_____|_____|_____|_____|______|

```

## Task
I have been tasked to create a Bowling Sheet program that can calculate the score of a player who inputs their rolls. The program will then calculate their score according to the rules of bowling: `https://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring`. \
\
To do this, I will be planning my program with Domain Modelling and by using TDD, I will use tests to test the behaviour of the program and ensure that my code can pass them.

## Instructions
Clone this repository to your desired location using `git clone https://github.com/mcsuGH/bowling_js.git`.\
\
You can then run `npm add jest` whilst in the main directory in your terminal and then use the command `jest` to run the tests. Alternatively, use node.


## Specification 
Strikes\
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.\
\
Spares\
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).\
\
10th frame\
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.\
\
Gutter Game\
A Gutter Game is when the player never hits a pin (20 zero scores).\
\
Perfect Game\
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## User Stories created from Specification
```
As a Player,
So that the game can be completed,
I would like normal frames to end after a maximum of two rolls

As a Player,
So that the game can be completed,
I would like normal frames to end after all ten pins are down

As a Player,
So that the game can be completed,
I would like the game to end after ten frames

As a Player,
So that I know how well I am playing,
I would like to keep track of my total score in each frame

As a Player,
So that my score is calculated correctly,
I would like my strikes to have the next two rolls added on to the score as a bonus

As a Player,
So that my score is calculated correctly,
I would like my spares to have the next roll added on to the score as a bonus

As a Player,
So that my score is calculated correctly,
I would like the final frame to be able to take a maximum of 3 rolls in case of a spare or strike,

As a Player,
So that my score is calculated correctly,
I would like the final frame to add only the bonus of the extra roll/s rather than the both the value and the bonus of the extra roll/s

```

## Domain Modelling
![Screenshot](https://i.imgur.com/QJcdsw3.png)

## References
```
https://www.asciiart.eu/sports-and-outdoors/bowling
```
used the above for ASCII art of the bowling sheet


## Functionality yet to be added
