## Jordan's Bowling Scorecard

Welcome! This is my bowling scorecard written using JavaScript. 

There are two different ways this program can be run. 

- Passing the scorecard as an array

This scorecard allows you to pass in your bowling scorecard as an array eg ```[[3, 4], [5, 3], [4, 5], [5, 3], [1, 0], [3, 6], [4, 4], [3, 5], [3, 3], [7, 2]]``` and it will calculate your final score, including strikes and spares. 

- Command Line Interface

Using the CLI, you are able to enter your scores one at a time and your score will be automatically provided to you.

## Features

  * [X] Strikes
  * [X] Spares
  * [X] 10th Frame
  * [X] Gutter Game
  * [X] Perfect Game

## How to use

### Passing the Scorecard as an array

- Clone this repo to your local machine
- Run node in your terminal and enter '.load scorecard.js' to require the program in node.
- To insert a scorecard and have your game calculated, you can use the command 'const score = new Scorecard('insert your scorecard here').
- This will import your scorecard into the program, to have the program calculate your final score you can use the function '.finalScore();'
- Happy Bowling! 

![Screenshot](https://imgur.com/Blw0tac.png)

### CLI

- Clone this repo to your local machine
- Run node in your terminal and enter '.load commandInterface.js' to require the program in node.
- The program will prompt you to enter your scores one at a time.
- Once you have entered all of your scores into the program, the program will automatically tell your your final score.
- Happy Bowling! 

![Screenshot](https://imgur.com/D3YauuB.png)

## Testing

I used https://www.bowlinggenius.com/ to calculate my tests and ensure the scores were correct.

![Screenshot](https://imgur.com/1XinoDn.png)

## Domain Model

![Screenshot](https://imgur.com/IupQmSd.png)
