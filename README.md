### [Makers Academy](http://www.makersacademy.com) - Week 6/7 Weekend programming challenge 

# Bowling Challenge 🎳

#### Technologies: Javascript, jQuery, Jasmine, HTML, CSS 

[Task](#Task) | [Installation Instructions](#Installation) | [Bowling - how does it work?](#Bowling) | [User Stories](#User_Stories) | [Further improvements](#Further_Improvements)

![bowling](bowling-screenshot.jpg)

## <a name="Task">The Task</a>

THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

This challenge is the fifth afternoon pair programming challenge at [Makers Academy](https://github.com/makersacademy).

## <a name="Installation">Installation Instructions</a>

1. Fork this repository, clone to your local machine then change into the directory:
```
$ git clone git@github.com:davmcgregor/bowling-challenge.git
$ cd bowling-challenge
```
2. Run jasmine for tests and coverage
```
$ open SpecRunner.html
```
3. Run the app on a local server and use on the broswer:
```
$ open BowlingGame.html
```

## <a name="Bowling">Bowling — how does it work?</a>

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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](example_ten_pin_scoring.png)

## <a name="User_Stories">User Stories</a>

```
As a bowler,
To keep track of my scores,
I would like to input a score
```
```
As a bowler,
To complete a turn,
I would like to enter two rolls
```
```
As a bowler,
To keep track of my score,
I would like to see the total score for each turn
```
```
As a bowler,
To score a stike correctly,
I would to add the next two scores to my strike turn
```
```
As a bowler,
To score a spare correctly,
I would to add the next score to my strike turn
```
```
As a bowler,
To keep track of my score,
I would like to see my total
```
```
As a bowler,
To complete a game,
I would like to have ten turns
```
```
As a bowler,
To get as much points as possible,
I would like to have a bonus roll if I score 10 on the 10th turn
```

## <a name="Further_Improvements">Further Improvements</a>
* Requires more work to get jQuery functioning, e.g.
- Gutter then 10 should print a spare
- Final frame 9 then 1 (spare) should allow an additional final roll
