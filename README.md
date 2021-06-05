![Travis CI badge](https://travis-ci.com/rdupplaw/bowling-challenge.svg?branch=master)

# Bowling Challenge in JavaScript

## About

This is a JavaScript rewrite and slight redesign of [my Bowling Challenge in Ruby](https://github.com/rdupplaw/bowling-challenge-ruby).

This program calculates the score of a bowling game given the rolls. A user can input the rolls sequentially as they occur:

```javascript
game.bowl(5) // => 5
game.bowl(3) // => 8
// etc.
```

The `Game.prototype.bowl()` method returns the current total score, following [traditional ten-pin bowling rules](https://en.wikipedia.org/wiki/Ten-pin_bowling#Traditional_scoring). There is no need to enter `game.bowl(0)` after a strike; the game logic will automatically move onto a new frame when a strike occurs.

The game does not validate the pinfall of rolls, so there's nothing to stop a user from inputting `game.bowl(100)`. The game does not stop you from bowling after the last frame, but the scoring does not take into account any frames after the last frame, except for bonuses.

### Design

This program comprises two classes: Game and Frame. Game holds an array of Frame objects. Game does two things with the given roll: relays it to the current frame (as a standard roll) and broadcasts it to all frames (as a bonus roll, which Frame objects decide to accept or reject). Game creates a new frame if the current frame is over. It also calculates the total score by summing the scores of each frame.

Frame objects keep track of their own pinfall and any bonuses that they deserve based on their rolls and configuration. They can calculate their frame score from the pinfall plus the bonuses. They can also calculate if they are a strike or a spare, and if they are over (reached max rolls and/or pinfall) and finalized (over but awaiting bonus rolls).

### Built with

- JavaScript/Node.js
- Jasmine
- ESLint

## Getting started

### Prerequisites

- Node.js
- Node Package Manager

### Installation

```bash
git clone https://github.com/rdupplaw/bowling-challenge.git
cd bowling-challenge
npm install
```

## Usage

```javascript
// in Node
const Game = require('./lib/game')

game = new Game()
game.bowl(10) // => 10
game.bowl(4) // => 18
// etc.
```

### Testing

```bash
npm test
```
