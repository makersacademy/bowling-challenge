
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### User Stories

```
As a ten-pin bowler,
I want to enter my rolls onto the scoreboard
so I can record my game.
```

```
As a ten-pin bowler,
I want my current score to be calculated
so I know if I am winning.
```

```
As a ten-pin bowler,
I want to see when my strike bonus is active
so I know that my next roll will receive bonus points.
```

```
As a ten-pin bowler,
I want to see when my spare bonus is active
so I know that my next roll will receive bonus points.
```

```
As a ten-pin bowler,
I want to be able to given a final score
so I know if I have won.
```

## Installation

- Install `node.js`
- Install `mongodb`
- Install [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)
- Open a new terminal window and run `mongod` to start the Mongodb server
- Create a local mongodb called `bowling_test` on `localhost:27017`
- Clone repo
- `cd` into `app` directory
- Run `npm install`
- Open a new terminal window and run `nodemon ./bin/www` to start the app server
- Run `npm test` to run the test suite
- Open `http://localhost:3000/` to view the app

