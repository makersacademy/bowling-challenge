
Bowling Challenge
=================

### Key features of a bowling game

*A frame allows:
 -2 rolls
 -1 roll when the player makes a strike
*A frame has 10 pins
*Score increases with:
 -the number of pins down for each frame
 -plus the number of pins down in the next roll in case of spare (maximum bonus of 10)
 -plus the number of pins down in the next two rolls in case of strike (maximum bonus of 20)
 *A game has:
  -10 frames
  -11th bonus frame when the player makes a spare in 10th frame
  -11th and 12th bonus frames when the player makes a strike in last frame

### My approach:

3 objects will be designed to track score of a game

*Player whose responsibilities include:
  -assigning a level: beginner, intermediate, confirmed, professional
  -determining number of pins down at each roll depending on level

*Frame whose responsibilities include:
  -keeping track of frame#
  -keeping track of pins down

*Game
-keeping track of score
-indicating when game is over

### User story:

```
As a player,
in order to play bowling
I can start the game by making a first roll
```

```
As a player,
in order to earn points
I can knock down pins with my first roll
```

```
As a player,
in order to earn more points
I can make a second roll to knock down remaining pins, if any
```

```
As a player,
in order to make progress in the game
I can start a new frame after two rolls or when I knocked down all the pins after one roll
```

describe('it can start a new frame', function(){

  it('after two rolls', function(){
    spyOn(Math,'random').and.returnValue(0.13)
    player.makeRoll(game,roll);
    spyOn(Math,'random').and.returnValue(0);
    spyOn(rollTwo, 'secondRollRandomizer').and.returnValue(2)
    player.makeRoll(game,rollTwo);
    expect(game.frameNumber()).toEqual(2);
  });

  it('after one roll when making a strike', function(){
    spyOn(Math,'random').and.returnValue(0.80)
    player.makeRoll(game,roll);
    expect(game.frameNumber()).toEqual(2);
  });
});

### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

CI
--

We are running JSHint on our CI server - save yourself having to wait for a build to happen by linting your code on your machine first. [Here are installations for most popular editors](http://jshint.com/install/). Grab the `.jshintrc` from this repo and have better JS!

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
