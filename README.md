
# Bowling Challenge

_My solution is the subdirectory /Bowling. Original challenge README [here](./challenge.md)._

## Getting started

Tests may be run as follows:

```sh
git clone git@github.com:dafuloth/bowling-challenge.git
cd bowling-challenge/Bowling
open SpecRunner.html
```

## Usage

### Creating a new Bowling Scorecard

```javascript
var bowling = new Bowling()
```

![Creating a new Bowling Scorecard](./Bowling/images/new_bowling.png)

### Add roll to Bowling Scorecard

The solution endeavours to ignore illogical or physically impossible inputs:

- Knocking down more than 10 pins in a normal frame: e.g. 7, 5
- Adding a third roll to a frame - unless it's the last frame and bonus roll(s) are in play
  - _Illegal:_ **2, 3, 4**
  - _Allowed in last frame:_
    - 2 bonus rolls with a strike: **10, 2, 3** 
    - 1 bonus roll with a spare  **4, 6, 10**

#### Adding a normal roll

```javascript
bowling.addRoll({frame: 1, pinsDown: 4})
bowling.addRoll({frame: 1, pinsDown: 5})
// frame complete, further rolls ignored:
bowling.addRoll({frame: 1, pinsDown: 3})  
```

![Adding a normal roll](./Bowling/images/addRoll.png)

#### Adding a Strike

```javascript
bowling.addRoll({frame: 2, pinsDown: 10}) // this is a Strike

// frame complete, further rolls ignored:
bowling.addRoll({frame: 2, pinsDown: 2})  
```

![Adding a Strike](./Bowling/images/addRoll_Strike.png)

#### Adding a Spare

```javascript
bowling.addRoll({frame: 3, pinsDown: 8})
bowling.addRoll({frame: 3, pinsDown: 2}) // a Spare is recorded
// frame complete, further rolls ignored:
bowling.addRoll({frame: 3, pinsDown: 1})
```

![Adding a Spare](./Bowling/images/addRoll_Spare.png)

#### Strike on last frame awards 2 bonus rolls

```javascript
bowling.addRoll({frame: 10, pinsDown: 10}) // a Strike is recorded
bowling.addRoll({frame: 10, pinsDown: 10}) // First bonus roll
bowling.addRoll({frame: 10, pinsDown: 10}) // Second bonus roll
// frame complete, further rolls ignored
```

![Strike on last frame awards 2 bonus rolls](./Bowling/images/last_frame_Strike.png)

#### Spare on last frame awards 1 bonus roll

```javascript
bowling.addRoll({frame: 10, pinsDown: 9})
bowling.addRoll({frame: 10, pinsDown: 1}) // a Spare is recorded
bowling.addRoll({frame: 10, pinsDown: 10}) // Bonus roll
// frame complete, further rolls ignored
```

![Spare on last frame awards bonus roll](./Bowling/images/last_frame_Spare.png)

## Further work

- _Work in progress:_ Refactor `addRoll()` for more intelligent data entry, allowing it to work just by passing the number of pins knocked down
  - .addRoll(5)
  - it should be able to progress through the scorecard on its own without being told which frame the roll belongs to
  - the solution should then assign it appropriately, taking into account all the rules
  - this approach might be more reliant on a "virtuous consumer" 