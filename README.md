# Bowling Scorecard Challenge

 A Javascript implementation of a bowling scorecard program.

 I this program, a full game of bowling can be input.
 At any point during the game, a scorecard can be printed to the screen.
 This scorecard is formatted as a markdown table so it can easily be used online if required.

 ---

 # Running the project

 After cloning this project, you need to install the required libraries by running
 ```bash
npm install
 ```
 if you have `npm` installed.
 Once you have done this, you can run the command line version of the app by running
 ```bash
node app
 ```
 in the terminal.

This program can also be tested using the `jest` package.
To run these tests, run
```bach
jest
```
from the command line.

---

# Technical Details

The main logic of this project is contained within 3 classes:

- `Frame` contains the logic of a normal frame of bowling, including detecting when a strike or spare has been rolled, and how to award bonuses to such frames.
This class also has a method to format its rolls to a string (`format` method).
- `Frame10`, a child of the `Frame` class, that adds extra logic on top of the `Frame` class for the final frame of a game.
This allows for extra rolls in case a player gets a strike or a spare.
- `Game` contains the logic that links 10 frames together to form a full game of bowling (9 intances of the `Frame` class and one instance of the `Frame10` class).
In particular, this class keeps track of which frame is currently being played.

On top of this, we include two other classes which handle input and output to the client.
_These are only useful for creating a command line interface with the client._
These classes are

- `GameFormatter`, which is responsible for formatting full scorecard in the markdown table format.
- `Cli` which contains all the logic to input a full bowling game through the command line with `node.js`.
(`node app` creates an instance of the `Cli` class and calls its `run` method).

---

# Things to add

- Use the logic from the `Frame`, `Frame10` and `Game` classes to create a more interactive bowling scorecard, preferably in a webpage.
- Such a webpage could also allow the user to share their best games with their friends.
- Allow for the creation of several players in the same game.

---

# Skills used in this project

- Object Oriented Design (including inheritance)
- Single Responsibility Principle
- Test Driven Development

Other skills:

- I tried using [trello](https://www.trello.com) to better organise how I iplemented all the features of the application.
- I used branches and pull requests on this solo project to practice using this workflow for later collaboration with others.
Note that this presents many less challenges than when working with others, since there are for instance many less conflicts.
