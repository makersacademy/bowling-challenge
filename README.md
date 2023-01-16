# Bowling Scorer

A JavaScript program that calculates the scores of a bowling game for a single player.

## Technologies:
- JavaScript
- Jest

## How to run

### Installation
([Instructions to install / update](https://github.com/nvm-sh/nvm#installing-and-updating) Node Version Manager if required)

Clone this repo locally and install all dependencies of this project:
```bash
npm install
```

### Run code
Start Node.js in the terminal from the project's root folder:
```bash
node
```

```javascript
// Require BowlingGame class and create a new instance of it
const BowlingGame = require('./bowlingGame')
const game = new BowlingGame()

// Add scores for each frame as an array of two numbers.
game.addScore([3, 5])

// After scores have been added for 10 frames, end the game to get a score calculated.
game.endGame()
```
