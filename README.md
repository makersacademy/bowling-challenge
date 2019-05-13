
# Bowling Challenge

Count and sum the scores of a bowling game for one player (in JavaScript).

### Installing

```
git clone git@github.com:shektor/bowling-challenge.git
cd bowling-challenge
npm install
```

### Usage

```
node

var Game = require('../../src/game');
var game = new Game();

game.addRoll(3);
game.addRoll(6);
game.addRoll(2);
game.addRoll(5);

var Scorecard = require('../../src/scorecard');
var scorecard = new Scorecard();

scorecard.score(game)
> 16
```

### Testing

```
npm test
```
