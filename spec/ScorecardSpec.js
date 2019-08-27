'use strict;';

// import {
//   Scorecard
// } from '../lib/Scorecard.js';

var Scorecard = require('../lib/Scorecard.js');

describe('Scorecard', function () {
  var scorecard;
  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('starts with empty rolls', function () {
    expect(scorecard.rolls).toEqual([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ])
  });

  it('adds a roll to the rolls', function () {
    scorecard.addRoll(5);
    expect(scorecard.rolls[0]).toEqual([5])
    scorecard.addRoll(5);
    expect(scorecard.rolls[0]).toEqual([5, 5])
    scorecard.addRoll(10);
    expect(scorecard.rolls[1]).toEqual([10])
  });

  it('reports the frames so far', function () {
    scorecard.addRoll(5);
    expect(scorecard.frames[0]).toEqual(5);
    scorecard.addRoll(5);
    expect(scorecard.frames[0]).toEqual(10)
  });

  it('calculates spare bonuses', function () {
    scorecard.addRoll(5);
    scorecard.addRoll(5);
    scorecard.addRoll(5);
    expect(scorecard.frames[0]).toEqual(15)
  });





});