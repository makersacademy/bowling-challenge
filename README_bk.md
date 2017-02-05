![Challenge Workflow](https://www.dropbox.com/home?preview=Workflow.pdf)


Bowling Challenge user stories:
```
Frame
As a player so that I know the number of pins I knocked down
A bowling frame must have two separate throws to record the number of pins I knocked down.

Example: [3,6] is a frame with two throws in which 3 pins were knocked down in the first throw and 6 in the second throw.

Frame score
As a player so that I know my score after 2 throw
A bowling frame should return the sum of the number of pins I knock down

Example : the score of frame [3,6] is 9, the score of [1,7] is 8


As a player so that I can play bowling game
A valid game should have 10 frames made of a set of 2 throws each
Example [1, 2] [3, 4] [4, 1] [ 8, 1] [3, 2] [1, 6] [8, 1] [7, 2] [9, 0] [0, 9]

Game score
As a player so that I know my score per game
The game should return the sum of the individual scores of its frames.
Example: The score of game [1, 2] [3, 4] [4, 1] [8, 1] [3, 2] [1, 6] [8, 1] [7, 2] [9, 0] [0, 9] is 72
         The score of game [1, 5] [3, 6] [7, 2] [3, 6] [4, 4] [5, 3] [3, 3] [4, 5] [6, 1] [2, 6] is 79

Strike
As a player so that my score is calculate accurately when I bowl strike
A strike frame score equals 10 plus the sum of the next two throws of the subsequent frame

Example: The score of game [10, 0] [3, 6] [7, 2] [3, 6] [4, 4] [5, 3] [3, 3] [4, 5] [8, 1] [1, 3] is 90.

Spare
As a player so that my score is calculated accurately when I bowl Spare
The score of a spare frame is 10 plus the value of the first throw from the subsequent frame.
Example: The score of game [1, 9] [3, 6] [7, 2] [3, 6] [4, 4] [5, 3] [3, 3] [4, 5] [8, 1] [2, 6] is 85.

Strike and Spare
As a player so that my score is calculated accurately when I bowl strike and Spare
The score of strike and spare is 10 plus the sum of the next two throws of the subsequent frame

Example : The score of game [10, 0] [4, 6] [7, 2] [3, 6] [4, 4] [5, 3] [3, 3] [4, 5] [8, 1] [2, 3] is 100
```
