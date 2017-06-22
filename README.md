Bowling Challenge
=================
[![Build Status](https://travis-ci.org/charlottebrf/bowling-challenge.svg?branch=master)](https://travis-ci.org/charlottebrf/bowling-challenge)

Technologies
-----
* Javascript v '5.0.3'

* NPM install dependencies
```bash
$ npm install
```

Test suite
-----
* Jasmine  
* ESLint: 0 offences

Task
----
## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

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

My Approach
----
- **The frame is not an object but an index** - In drawing a line between the real world objects of a bowling game and the program, I took the approach that although a frame is essential for scoring it didn't need to be an object in my program. Instead I used it in strikeBonus as an index count that would loop over two indexes (or two rolls) once and iterate up to 10 frames. See the below picture that explores the idea of the frame being used in conjunction with the index:
![Imgur](http://i.imgur.com/B1YM952.png)
This design decision sought to avoid lengthy and complex use of multidimensional arrays, to provide the simplest solution possible.
- **stored_pins** - The Game contains all of the pins in the stored_pins property. This array is updated each time the rolls function is invoked passing in the number of pins knocked over as a parameter. A maximum of 21 pins can be passed in, before the end of game message is displayed.
- **Separation of bonus calculations for strikes, spares and tenth frame function** - These functions (normalScore(); strikeBonus(); spareBonus(); tenthFrameBonus()) were separated in order to avoid lengthy functions with many responsibilities. They separately calculate the relevant bonuses which are then returned in the totalScore() function.
- **Display Messages** - Two display messages are given to advise for a strike and the end of a game.


Future Improvements
----
- **normalScore** - I would like to complete my frames logic to be successfully applied to the normalScore() function. Please see the attached screenshot of a solution that was close, but not quite there.
![Imgur](http://i.imgur.com/FE2BKEN.png)
At present the total scoring for a tenth frame strike or spare is skipped as the test is not passing. The logic behind the frames and how it is integrated within the existing functions needs some more thought.
- **Edge cases** - It would be beneficial to cover more edge cases in the tests to better account for unexpected results and ensure the robustness of the logic.
- **Further refactoring** - There is some repetition in the program as it stands. To improve this I would like to do further refactoring to ensure the code is DRY on every level.
- **display** - With more time I would add in a display object to separate out the responsibility of the Game to just deal with Game issues and the Display to carry out all display messages. I would also like to add in more messages for spares.
- **User Interface** - In the future I would like to add in a Vanilla Javascript interface to interact with the bowling game so the user could actually play the game in the browser.
