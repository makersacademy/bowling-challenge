## Introduction

This repo contains the code I wrote for the JavaScript Bowling Challenge, the Makers Academy Week 6 end-of-week challenge. The goal of this challenge was to convert the Ruby code I wrote for the [Week 5 end-of-week challenge](https://github.com/Zimmja/bowling-challenge-ruby) into JavaScript.

## My approach

### Converting Ruby to JavaScript

For this project, I intended to use exactly the same logic as in the Ruby version. I didn't plan to use any additional classes or functionality. To begin, I created the necessary .js files with corresponding .test.js files for testing with Jest. Using a TDD approach, I began by translating a Ruby Rspec test into a JavaScript (JS) Jest test. I then wrote JS code based on my previous Ruby code to pass this test. I repeated this for all steps until the full functionality I was aiming for was achieved. Then I refactored all code to make it more readable.

I successfully translated all my Ruby code into JavaScript.

Once all classes were established, I created a simple cli.js file in which a user can input successive bowls and receive a scoreboard with the total score at the end.

I then ran the scorecard in cli.js to test functionality and found a big issue. I followed a debugging process, using the cli.js output to print various values with successive inputs. This led me to realise that the addZerosAfterTens function on my Scorecard class wasn't functioning as planned. I realised this was because of how arrays were being called, which led me to learn more about calling array with JS. I fixed the issue and created a new Jest test to monitor it through a TDD approach.

### Adding a new class

In my Ruby version, I initiated the Scorecard class with a pre-filled array of values. For the JS version, I initiated a blank Scorecard and added a new functionality to add bowls one-by-one. In this way, I extended the functionality of this simple program beyond the previous version. This did introduce some issues: for example, it is now possible to add non-numerical bowl values, or values that don't make sense (e.g. a bowling round of 6 and 6, which would sum to over the maximum value of 10).

I recognised these issues were not errors in logic, but errors in management of inputs. As these inputs would be game-specific, I decided it would be useful to go beyond the challenge requirements and build a Game class to manage inputs, with the following goals:

```
class Game:
- Has a rollBowl function that calls addBowl on an associated Scorecard when conditions are right
- Counts the number of rolls made, and prevents the user from inputting too many rolls
- Allows bonus bowls to be rolled for game-finishing strikes and spares
- Score and Board information of associated Scorecard class are readable
- Prevents user from inputting non-numerical values
- Prevents user from inputting values that would produce frames with a sum over 10
```

I was able to implement the first 4 of these goals through a TDD approach, and I integrated this into the cli.js file successfully. Had I had more time, I would have implemented the last 2 goals as well.

## Technologies used

The following technologies were used in this repo

1. VS Code was used for all coding requirements
2. Prettier - Code formatter was used to improve JavaScript readability
3. I used node to test functionality in the terminal
4. Jest was used to test logic functionality
5. I used readline-sync to create the cli.js file

## Instructions for use

### Setup:

- Clone this repo to a local repository
- Ensure nvm is installed
- Open the directory in a terminal and enter "npm install readline-sync"
- While still in the terminal directory, enter "node cli.js" to begin a bowling scorecard

### Interaction:

- With a bowling scorecard running, enter the number of bowls score with a single throw. You will then be presented with a scoreboard showing your accumulating score across several rounds, with your current score at the end
- Leave the input field blank and press enter to exit

```

```
