
Bowling Challenge
=================

## Goals
This is the week 6 weekend challenge for Makers Academy. During this week, we were introduced to Javascript and JQuery.

- Translate last weekend's bowling challenge from Ruby into Javascript.
- Use JQuery to create a user interface.

## My Project

## Set Up
Clone the repository:
```
$ git clone https://github.com/emilyalice2708/bowling-challenge-ruby
```
Run bundle:
```
$ bundle install
```

## How To Use

Run app.rb:
```
$ ruby app.rb
```

- Visit http://localhost:4567/ in the browser:
![Homepage](https://i.imgur.com/eBiWLaW.png)

- Add to the scorecard by typing a valid number and clicking 'Bowl':
![InputRoll](https://i.imgur.com/Sj2nQck.png)

- If the roll is valid it will be displayed below:
![DisplayScore](https://i.imgur.com/zKbR5i1.png)

- If the user gets a strike, 'Strike' is displayed and counted initially as 10 points, with a bonus added after the next roll (spares are also scored this way):
![Strike](https://i.imgur.com/JVDpYuX.png)

- If number is invalid, error message is displayed on the page:
![InvalidError](https://i.imgur.com/rk42Mxd.png)

- If a non-integer is entered, 'That's not a number!' is displayed to the user:
![NonNumber](https://i.imgur.com/MorSogJ.png)

- At the end of a game, 'Game Over' is displayed to the user and any new rolls will not be added to the score:
![GameOver](https://i.imgur.com/o9yseEw.png)

- The user can start over with 'New Game' and score is reset:
![NewGame](https://i.imgur.com/YEOqlYW.png)

## Tests
- Capybara feature tests can be run in the terminal with rspec.
- Open SpecRunner.html to run Jasmine tests on Javascript code.

## Planning

### Tests

In order of increasing complexity:

1. Can score a single frame of 0s:

[0, 0] --> Bowling.score --> 0

2. Can score a single frame of 2s:

[2, 2] --> Bowling.score --> 4

3. Can score a gutter game:

10 x [0, 0] --> Bowling.score --> 0

4. Can score a game of all 2s:

10 x [2, 2] --> Bowling.score --> 40

5. Can score a spare, followed by a 2 and all 0s:

1 x [5, 5]
1 x [2, 0]  --> Bowling.score --> 14
8 x [0, 0]

6. Can score a strike, followed by a double 2 and all 0s:

1 x [10]
1 x [2, 2]  --> Bowling.score --> 18
8 x [0, 0]

7. Can correctly score spares in final frame:

9 x [0, 0]
1 x [5, 5]  --> 12
1 x [2]

8. Can correctly score three strikes in final frame:

9 x [0, 0]
1 x [10, 10] --> Bowling.score --> 30
1 x [10]

9. Can score a perfect game:

10 x [10]
2 x [10]     -->  Bowling.score --> 300


### Bowling rules (thank you Makers) and my initial thoughts:

#### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately. The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Thoughts:
- If a player scores a strike before the 10th frame, the next roll should be counted as the beginning of the next frame, as opposed to the game expecting to recieve a score of 0 for the second roll of the same frame.
- Rolls will need to be stored in order for scores to be correctly calculated.
- Guard clauses will likely be required to prevent errors when trying to retrieve the score before a strike score can be calculated.

#### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

Thoughts:
- As above, rolls will need storing and guard clauses required.

#### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

Thoughts:
- There will likely need to be a length check of the score array to ensure that the player can't roll more than the allotted rolls in a game.
- Perhaps an option for a user to restart a game if they attempt to roll again after completing a game.

#### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

Thoughts:
- Perhaps a message when this type of game is scored.

#### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

Thoughts:
- Perhaps a message here as well.




