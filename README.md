# Bowling Challenge


![bowling](https://user-images.githubusercontent.com/75075773/111071204-f1cef880-84cc-11eb-8278-1501835dd605.gif)

## Task

This is my submission for the week 6 weekend project of Makers Academy. The task was to translate the Bowling Scorecard project from last weeks Ruby challenge into JavaScript. 

I have translated my Ruby code over to JS and created a user interface which utilises jQuery functions to make it interactive for the user.

## How to Install

```
fork and clone this repo
```
To see the interface in the browser:

```
$ open index.html
```
To run the tests:
```
$ open SpecRunner.html
```

## How to use

```
- let game = new Game();
- game.beginFrame
- game.throwball(points)
- game.addToScorecard
- game.strikeBonus or game.spareBonus

```

Repeat these commands, in the 10th frame, strike and spare bonus functions are disabled so only base points are added(your 10th frame bonus points). 

In the future, the User Interface could be updated so that each function is interactive and the scorecard could be used solely via it's interface.

<img width="726" alt="Screenshot 2021-03-14 at 14 19 49" src="https://user-images.githubusercontent.com/75075773/111071940-5e97c200-84d0-11eb-9f5d-dc390299fa55.png">


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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
