# Bowling Challenge
=================
A program written in JavaScript in 2 days to model the functionality of a game of bowling and its surprisingly tricky scoring system.

## Approach
It all started with a test.
As this is a game of bowling, the first constructor function I created was *Game*. Its responsibility is to throw the balls whilst keeping track of rounds and frames for each throw.

Following that it made sense to add a *Score* constructor function which would calculate the score for every possible situation and edge case in a bowling game. It made sense to reuse the logic for normal scoring in spare scoring and spare scoring in strike scoring so as to avoid deeply nested conditionals and any other source of unreadability in the code.

Finally, I debated with myself about creating a separate constructor function for the *Pins*. If the goal would be to only keep track of scoring, rather than actually playing, it would probably be reasonable to include the number of pins logic to Game. But I decided in the end that having randomised pins would allow me to do both: expand the code into an interactive front end and be able to only keep track of current scoring if that was the user's intention.

## How to run the tests:
Load the SpecRunner.html file path on the browser:

![screen shot 2017-07-04 at 23 39 25](https://user-images.githubusercontent.com/25456821/27843941-5c535f26-6112-11e7-8ce6-69e4ba10be8d.png)

## How to run the program:
- Open the dev tools in the browser tab where the tests are running
- Click on the console tab
- Example:
```
var game = new Game();

var pins = new Pins();

game.throwFirstBall(pins.pinsDownFirstThrow);

game.throwSecondBall(pins.pinsDownSecondThrow());

game.frames
[Array(2)]
  0: Array(2)
    0: 5
    1: 2

var score = new Score();

score.calculateScore(game.frames);
7
```
## If I had more time
I would add a front end interactive web page for the user to be able to play. Also, I would probably switch the logic to run it in NodeJS so I could make use of libraries such as Express for setting up the server and Angular for calling the functions when I wanted them to be triggered.

## If you want an example of how bowling scoring works:

![screen shot 2017-07-04 at 23 39 25](images/example_ten_pin_scoring.png)
