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

#### Running locally:

- Open index.html
- Click on a numbered button to input how many pins you knock down
- The game will automatically move onto the next frame once one is full
- Your total score is shown at the top, and running totals for each frame in the scorecard below


To-do
-------

1. Refactor bonusPoints()
2. Better tests
