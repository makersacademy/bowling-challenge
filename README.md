# Bowling Challenge

How to use
-----
To download and run the tests just

```
$ git clone git@github.com:kateloschinina/bowling-challenge.git
$ cd bowling-challenge
$ open index.html
```
Or alternatively you can go to [online version of the website](https://kateloschinina-bowling.herokuapp.com/)

To see all the tests run:
```
$ open SpecRunner.html
```

The usage of the app is rather self-explanatory, please see the screenshot below. You can either pick the scores you want or use random rolls generator.

![Imgur](http://i.imgur.com/RES1PCo.png)

The program does not allow you to score more than 10 in one frame:

![Imgur](http://i.imgur.com/gMsZZp4.png)

And the type of the game you played is announced in the end:

![Imgur](http://i.imgur.com/GgeTOE5.png)


About the Task
-----

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

Reflections
-----
Although the app is on and working, I can see further opportunities for refactoring.
There might be a reason to split some of the functionality from controller into a separate file, that will serve as a buffer between client interface and internal calculations. Some of the functions might be refactored to improve logic readability.
