
# Bowling

A Javascript programme built in a test-driven environment, using Jasmine for testing. The program has a html/css front end along with a jQuery User Interface.

### How to play

```
# clone this repo
open index.html # open in the browser from the command line
# bowl away!
```

### View the Jasmine tests

```
# clone this repo
open SpecRunner.html # open in the browser from the command line
```

### Bowling — how does it work?

Read up on the rules [here](http://en.wikipedia.org/wiki/Ten-pin_bowling)

### Features

#### Strike
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

![Alt text](https://github.com/JessicaBarclay/bowling-challenge/blob/master/links/strike.png "strike")

#### Spare
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

![Alt text](https://github.com/JessicaBarclay/bowling-challenge/blob/master/links/spare.png "spare")

#### Game over
The game is over when the frame count reaches 20

![Alt text](https://github.com/JessicaBarclay/bowling-challenge/blob/master/links/game-over.png "game-over")

#### Built in a test-driven environment
The program uses [Jasmine](https://jasmine.github.io/)
 to test drive the Javascript program.

![Alt text](https://github.com/JessicaBarclay/bowling-challenge/blob/master/links/jasmine-javascript-tdd.png "jasmine-javascript")

### CSS styling
CSS buttons sourced from [codepen.io](http://codepen.io/konradwax/pen/woPNqJ)

Fonts sourced from [Google Fonts](https://fonts.google.com/)
