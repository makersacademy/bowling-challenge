
Bowling Challenge
=================

This program is a console-based score calculator for ten-pin bowling. It accounts for spare and strike bonuses points and bonus rolls in the last frame.

The program is built in JavaScript following TDD/BDD practices using Jasmine.js.

Installation
------------

* Clone this repo on your machine and cd into it:
```
$ git clone https://github.com/mic-css/bowling-challenge.git
$ cd bowling-challenge
```

* Run the test suite by running the Jasmine SpecRunner (it will open in your default browser):
```
$ open SpecRunner.html
```

* Open the developer console (`Ctrl+J` in Google Chrome) to interact with the program
* Instantiate a new game:
```
> game = new Game();
```

Usage
------

You can interact with the program with the following commands:
```
$ game.roll(10) // rolls a strike
$ game.calculateScore(); // returns the current score for the game
```

Future Development
------------------

Future iterations of the program will focus on developing the following features:
* A full **user interface** to keep score of a game
* Multiple games / players
