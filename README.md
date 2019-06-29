# Bowling Challenge

For this challenge I will build an interactive bowling scorecard in JavaScript for a one player game (a solo bowler if you will). The player inputs the score they get for each roll.

The scorecard will need to count and sum the scores of a bowling game for one player.

The full instructions given for this project can be found in `challenge-instructions.md`.

## Rules of bowling

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Strikes

**Definition:** All 10 pins are knocked down with the first roll of a frame.

The frame ends immediately (since there are no pins left for a second roll).

The **bonus** for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

#### Spares

**Definition:** All 10 pins are knocked down after both rolls of a frame.

The player can only get a spare if they knock down between 0 and 9 pins on the first roll of a frame. If they knock down all 10 on the first roll of the frame that counts as a strike.

The **bonus** for that frame is the number of pins knocked down by the next roll (first roll of next frame).

#### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

```
10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).
```

#### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

#### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

#### Score examples

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Set up



## Approach

I laid out the requirements of the app as User Stories, detailed below. To keep the build simple, I implemented the requirements in stages.

#### Business logic

* Version 1 does not recognise spares or strikes, so the player bowls 10 frames, with two rolls in each frame.
* Version 2 recognises a spare, so calculates bonus points and adds them to your score for that frame. You get one extra roll if you get a spare in the final frame.
* Version 3 recognises a strike, so moves onto the next frame and calculates your bonus points accordingly. You get two extra rolls if you get a strike in the final frame.

#### Interface

* Version 4 allows the player to enter the number of pins knocked over with each roll and display their score.


### User Stories

#### Version 1 - Basics

```
As a solo bowler,
To play a full game of bowling,
I want each frame to consist of two rolls.

As a solo bowler,
To play a full game of bowling,
I want to each game to consist of 10 frames.

As a solo bowler,
To know how well I bowled,
I want my score for each frame to equal the number of pins I knocked down.
```

#### Version 2 - Spares

```
As a solo bowler,
So that I'm rewarded for knocking down 10 pins in a frame,
I want to receive bonus points that are added to my score for that frame.

As a fairly good solo bowler,
So that I get the correct score for a frame in which I get a spare,
I want to receive bonus points equal to the score of my next roll.

As a solo bowler who gets a spare in the last frame,
So that I get the correct bonus,
I want to have one extra roll.
```

#### Version 3 - Strikes

```
As a highly skilled solo bowler,
So that I don't have more rolls than I should,
I want to move to the next frame when I get a strike.

As a highly skilled solo bowler,
So that I get the correct score for a frame in which I get a strike,
I want to receive bonus points equal to the score for my next two rolls.

As a solo bowler who gets a strike in the last frame,
So that I get the correct bonus,
I want to have two extra rolls.
```

#### Version 4 - Interface
```
As a solo bowler,
To play a game of bowling,
I want to enter the number of pins knocked down on each roll (if any).

As a solo bowler,
So that I know how well I'm doing,
I want to see a running total of my score.
```
