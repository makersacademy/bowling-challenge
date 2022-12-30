# Bowling Javascript Challenge

A Bowling scorecard game which is run through the command line.

## Getting Started

### Installation

1. Clone the repo
```
  git clone https://github.com/chris-clement/bowling-challenge-js.git
```
2. Install node
```
  npm install
```
3. Run tests
```
  jest
```
---
## Usage

In the command line you should run node bowlingConsole.js and see the following
```
  node bowlingConsole.js
  Welcome to the bowling game
  Commands are as follows:
  'get score' => shows current scorecard
  'total' => shows total score so far
  'new game' => starts a new game
  otherwise enter a number to represent how many pins you knocked down
  enter command > 

```
Start entering rolls
```
 enter command > 3
Your roll of 3 was added.
Frame: 1. Turn: 2
enter command > 4
Your roll of 4 was added.
Frame: 2. Turn: 1
enter command > 2
Your roll of 2 was added.
Frame: 2. Turn: 2
enter command > 3
Your roll of 3 was added.
Frame: 3. Turn: 1
enter command > 5
Your roll of 5 was added.
Frame: 3. Turn: 2
enter command > 5
Your roll of 5 was added.
Frame: 4. Turn: 1
enter command > 3
```
Use get score to show scorecard
```
  enter command > get score
  [ [ 3, 4 ], [ 2, 3 ] ]
  Frame: 4. Turn: 1
  enter command > 
```
Use total to show total score
```
  enter command > total
  12
  Frame: 4. Turn: 1
  enter command > 
```
Use new game to reset the game
```
  Frame: 4. Turn: 1
  enter command > new game
  New bowling game created
  Frame: 1. Turn: 1
  enter command > 
```
