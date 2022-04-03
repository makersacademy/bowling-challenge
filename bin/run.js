#!/usr/bin/env node

const Game = require('../lib/game');
const Scorecard = require('../lib/scorecard');

const game = new Game(new Scorecard());
game.run();
