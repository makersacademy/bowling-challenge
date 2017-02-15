# Bowling Challenge
### Makers Academy Weekend Challenge No. 5

[![Build Status](https://travis-ci.org/KatHicks/bowling-challenge.svg?branch=master)](https://travis-ci.org/KatHicks/bowling-challenge)

### Instructions

We were given the weekend and the evenings during the following week to complete the challenge.

### Task

**Count and sum the scores of a bowling game for one player (in JavaScript) and a nice interactive animated interface with jQuery as a bonus.** A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

**Rules of the game:**
* The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.
* The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).
* If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.
  * 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
  * 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).
* A Gutter Game is when the player never hits a pin (20 zero scores).
* A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

See here for the full instructions: [INSTRUCTIONS.md](bowling-challenge/INSTRUCTIONS.md)

### Using my application

* You can interact with my application by:
  * Downloading the source code
  * Opening the `index.html` file at `bowling-challenge/src/index.html` in the browser (best to use Chrome)
  * Enter a number in the far left dropdown and an initial score should appear in the table
  * Note that the app currently breaks if you don't enter numbers in the dropdowns incrementally from left to right or if you don't skip a dropdown after a strike
* You can run my tests by:
  * Opening the `SpecRunner.html` file at `bowling-challenge/SpecRunner.html` in the browser (best to use Chrome)

### Dependencies

* Code was written using **JavaScript**
* **HTML** was styled using **Bootstrap 3** (developed by Twitter) alongside basic **CSS**
* User interaction was implemented using **jQuery**
* Code was tested using the **Jasmine** testing framework (developed by Pivotal Labs)

### Steps in my development process

* **Researched the problem**
  * Initial reaction on reading the task was confusion about the task itself. It didn't seem clear to me whether we were supposed to develop the whole game, including aiming a ball and knocking down pins, or just develop the score card.
  * Did a little research online and realised that the bowling challenge seems to be quite a well-known kata with the focus just being on the scoring. Apparently, the reason that it is such a famous kata is because the algorithms for bowling scores seems tricky but when using TDD can be actually quite simple.
  * Was really useful to do this research first to prevent me from over-complicating the problems.
* **Setting up my project**
  * Next task was all the administrative set up for the project. Added in standalone Jasmine to the directory for testing.
  * Set up the initial structure of this README.md
* **Implemented first feature for gutter games**
  * Based on guidance from YouTube videos found during research, I've decided to write my first test for gutter games in which not points are score in all 10 frames and player gets zero points.
  * Then, implemented code in the Game object to pass these tests
* **Implemented second feature for normal game (with no strikes or spares)**
  * After the gutter game implementation, I've decided to test-drive the functionality to correctly score a normal game - in which no strikes or spares were scored
  * Found this relatively easy to implement
* **Implemented correct scoring for spares**
  * Next moved onto spares
  * At this stage, noticed that my code started to get quite a bit more complex. Started to feel that it could be more simple than this, but decided to persevere with just trying to make the tests pass
* **Implemented correct scoring for strikes**
  * Finally, worked on strike scoring feature which, as above, made my code infinitely more complex
  * At this stage, started struggling with pleasing the JShint linter installed in Atom
  * Was difficult to keep the branching complexity and line length down when implementing this feature
* **Some initial refactoring**
  * Before moving on to the final feature, decided to work on some basic refactoring to make the code more manageable.
  * Main strategy was to pull out some helper methods such as:
      ```
      Game.prototype._sumFrame = function(frame) {
        if (typeof frame !== 'undefined') { return ((frame[0]) + (frame[1])); }
      };
      ```
  * Also worked on passing things around as arguments more to reduce line length
* **Implemented final feature for perfect game**
  * Required thinking about the final (10th) frame and how bonuses were being added onto the score
  * Really increased the branching complexity and line length in the `scoreStrike` method
* **Added further tests for edge cases**
  * Noticed that there were some other features and edge cases, not mentioned in the spec, that needed to be considered - mainly that you cannot knock over more than 10 pins, you cannot knock over more than a total of 10 pins within a frame, and a game has a length of between 10 and 12 frames.
  * Added tests for these scenarios and then added some error handling within the code to make these tests pass
* **Extracting a frame object**
  * All of the features were test driven in the same Game object and in a single script
  * Helped with focusing on making the code work but not very extensible or easy to read
  * Decided to extract a frame object first as it is a clear 'noun' with my domain and there are lots of functions that evaluate frames only
  * Completed the extraction by copying across everything that felt it should be in the frame class and then slowly removing it from the Game object, using the tests as a guide as to whether refactoring was working
* **Extracting a score object**
  * Next extracted a score object
  * Decided to extract a score object as realised from researching online that scores often accumulate points in a specific way with a cumulative list for each frame - decided that could extend the use-ability of my app by extracting a score object
  * Extracting score was more difficult than extracting frame as it was more entangled with the other objects
  * Did manage to pull something out eventually
* **Setting up and styling HTML layout**
  * Now that the domain model is essentially ready, decided to have a go at adding a user interfact to my app using jQuery
  * Set up the DOM as a table - mimicking bowling scorecards seen online - and added dropdown or `<select>` elements as the main means of interaction with my model
* **Adding user interaction to DOM as an interface to my model**
  * Next added jQuery event handlers so that the values selected in the dropdowns would be parsed as the argument for the high-level roll method
  * Also set it up so that the total scores were written into the correct table cells
  * Had problems with event handling select elements within table cells. It currently works with a general listener for all the select elements in the table. However, if trying to get it to listen to specific dropdown by id, the code currently breaks. Would like to read a bit more into how the DOM structure affects event listening.

### Ideas for extension

* **Finishing JQuery interactions**
  * Ran out of time with this challenge so that jQuery is not fully implemented
  * Vision is that all dropdowns except the far left are hidden on loading, and then when a first value is submitted, that dropdown hides itself and the next one in the chain is revealed.
    * Would guide the user to interact with the app in the desired way
    * Would also mean that the second roll skipped in a strike frame could be skipped automatically by the event handling
* **Adding unit tests**
  * Strongly relied on TDD for this project and needed the tests to guide the implementation
  * However, relied solely on feature tests to meet the specs and currently app has no unit testing
  * Now the the refactoring is complete, would be good to implement unit tests to check that all functions are working as expected
* **Further refactoring of business logic**
  * Although overall my refactoring and object extraction was successful, code is still far more clunky that would like. It would be nice to further clean the business logic
  * Have a feeling that there are some really neat and succinct ways of writing this app
