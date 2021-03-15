
Bowling Challenge
=================

Badge: jasmin 3.6.0, laguage JS, 

## How to run?
```
$ git clone git@github.com:sandyMax974/bowling-challenge.git
$ cd bowling-challenge
$ bundle install
```

## Planning
I decided to go back to last week challenge and adopt the same logic, as I wanted to focus on JQuery for this weekend challenge.

### Previously

This challenge gave me the biggest headeache so far. It was particular hard, as it was difficult to solve for the task ahead while looking to at the next step. I attempted to calculate each frame score while not having the next frame which made the task alomost impossible, however from the moment where I decided to first enter all the rolls, the flow sort of bacame clearer and it was easier to not get lost.

**Object Mapping**
| Object | Attributes       | Method        | Dependency |
| ------ | ---------------- | ------------- | ---------- |
| Game   | @max_frame = Int | play()        | Frame      |
|        | @frames = []     | add_bonus()   | Frame      |
|        | @score = []      | score_frame() | Frame      |
| Frame  | @rolls = []      | score()       |            |
|        | @pins = Int      | roll()        |            |
|        |                  | spare?()      |            |
|        |                  | strike?()     |            |
|        |                  | completed?()  |            |

**Programm Flow**

![Program Flow](https://github.com/sandyMax974/bowling-challenge-ruby/blob/main/images/flow%20diagram.png)

**Interface Mock-up**

![interface-mockup](https://github.com/sandyMax974/bowling-challenge/blob/master/interface.png)


### Bowling — how does it work?

#### Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

#### Spares
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

#### 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

#### Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

#### Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.
