Bowling Challenge
==================

Week 5 weekend challenge to create a javascript app which is able to score a game of bowling, with front-end interface.

Requirements 
-------

- A modern web browser
- To run the tests: 
  - Download a standalone copy of [jasmine](https://jasmine.github.io/) and put it in ./jasmine:

    ```
    .
    └── jasmine
       ├── MIT.LICENSE
       ├── SpecRunner.html
       └── lib
           └── jasmine-2.9.1
               ├── boot.js
               ├── console.js
               ├── jasmine-html.js
               ├── jasmine.css
               ├── jasmine.js
               └── jasmine_favicon.png
    ```
  - Add the following lines to SpecRunner.html:
    ```
    <!-- include source files here... -->
    <script src="../lib/game.js"></script>
    <script src="../lib/frame.js"></script>

    <!-- include spec files here... -->
    <script src="../spec/gameSpec.js"></script>
    <script src="../spec/frameSpec.js"></script>
    <script src="../spec/featureSpec.js"></script>
    ```


Instructions
-------

The app is available at https://ealitten.github.io/bowling-challenge/

- Click on a numbered button to input how many pins you knock down
- The game will automatically move onto the next frame once one is full
- Your total score is shown at the top, and running totals for each frame in the scorecard below

## Approach

Bowling is a surprisingly challenging game to score, mostly because a frame takes its bonus points from the next two rolls which could be in a number of different places. My original approach was to build a Frame and Game class, and to have the game add up all the bonus points for each frame by using a flattened array of all rolls and picking the next 1 or 2 (depending on spare/strike). However, bonus score seemed more like a property of the frame and I later refactored this so a frame reported its own bonus score, given the next two frames as arguments.


#### To do

Although I am fairly happy with this implementation, there are several things I would do to improve its design and to make it more OO given the opportunity:

1. Refactor method for scoring bonus points (for strikes and spares) so that frames are fully de-coupled from each other. The dependency on the other frames can be removed by each frame having a bonusRolls array, which would receive the next two rolls (in addition to these being given to the next frames) if it reported it was waiting for bonus rolls. It could then use these to determine the bonus points for itself without relying on other frames being supplied as arguments.

2. Refactor tests based on the above, so that they're fully isolated (currently testing for Game uses real frames instead of mocks).

2. Implement a class to produce the HTML dynamically, rather than have a pre-written empty table.
