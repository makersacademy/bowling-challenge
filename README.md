![Travis CI](https://travis-ci.org/kittysquee/bowling-challenge.svg?branch=master)

# Bowling Challenge

This is the repository for my week 5 and 6 weekend challenge for [Makers Academy](www.makersacademy.com). I was tasked with making a scorecard for a single player game of 10 pin bowling. I added in a randomisation function so the game could actually be played in the browser. This game was made using test driven development in JavaScript.

## Technologies Used
* JavaScript
* Jasmine
* jQuery
* Git
* Atom
* Travis CI
* JSlinter
* HTML
* CSS

## User Stories

```
As a player,
So I can play a game of bowling,
I would like to knock down some pins.

As a player,
So I can adhere to the normal convention in bowling,
I would like to bowl twice per frame.

As a player,
So I can adhere to the normal convention in bowling,
I would like there to be 10 frames per game.

As a player,
So I can score a spare,
I would like to knock down 10 pins over two bowls.

As a player,
So I follow the rules,
If I get a strike I don't get a second bowl in my frame.

As a player,
So I can see if I get a gutterball,
I would like to get 0 points.

As a player,
So I can get extra points,
If I get a strike or spare in the 10th frame I get 3 bowls.

As a player,
So I can score more points,
If I get a spare the first bowl score from the next frame is added to my spare score.

As a player,
So I can score more points,
If I get a strike the next two bowls scores are added to my strike score.

As a player,
So I can get a gutter game,
I would like to score 0 points for the entire game (20 0 scores).

As a player,
So I can score a perfect game,
I would like to get all strikes (score 300/12 strikes) for the entire game.

BONUS:

As a player,
So I can have an amazing visual experience,
I would like to have a stunning animated interface.
```

## How to run
In the terminal:
```
$ git clone git@github.com:kittysquee/bowling-challenge.git
$ cd bowling-challenge
$ open index.html
```

## Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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
