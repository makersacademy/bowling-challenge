# Bowling Challenge

![jQuery](https://user-images.githubusercontent.com/75075773/111069770-8550fb00-84c6-11eb-97a4-101b91744679.gif)

## Task

This is my submission for the week 6 weekend project of Makers Academy. The task was to translate our Bowling Scorecard project from last weeks Ruby challenge to JavaScript following our week of learning JS.

I have translated my Ruby code over to JS and created a user interface which utilises jQuery functions to make it interactive for the user. 

## How to Install

```
fork and clone this repo
```
To see the interface in the browser:

```
$open index.html
```
To run the tests:
```
$open SpecRunner.html
```

<img width="1344" alt="Screenshot 2021-03-14 at 13 23 32" src="https://user-images.githubusercontent.com/75075773/111070222-82efa080-84c8-11eb-8ebb-4a497c7f88cb.png">

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

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
