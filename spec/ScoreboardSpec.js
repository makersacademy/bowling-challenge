'use strict';

describe('Scoreboard', function() {
  var scoreboard;
  var hits;

  beforeEach(function() {
    scoreboard = new Scoreboard();
    hits = 4;
  });

  it('initalises empty frame first', function(){
    expect(scoreboard.frames.length).toEqual(0);
  });

  it('can go to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('get score of first roll', function(){
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    expect(scoreboard.frames[0].roll1).toEqual(hits);
  });

  it('get score of second roll, then new frame', function() {
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.frames[0].roll2).toEqual(hits);
    expect(scoreboard.frames.length).toEqual(2);
  });

  it('first roll cannot be saved if no bowling happened', function() {
    scoreboard.nextFrame();
    var message = 'Bowl first';
    expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
  });

  it('gets total score', function() {
    var total = hits + hits;

    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

  it('moves onto next frame saving score', function(){
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    expect(scoreboard.getCurrentScore()).toEqual(strike);
    expect(scoreboard.frames.length).toEqual(2);
  });

  it('adds bonus after strike', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    var bonus = (hits + hits) * 2;
    expect(scoreboard.getCurrentScore()).toEqual(strike + bonus);
  });

  it('last frame - two strikes', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(strike);

    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    var total = ( (strike+(strike+hits)) + (strike+(hits+0) + (hits+hits)) );
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

  it('last frame - three continuous strikes', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(strike);

    scoreboard.saveFirstRoll(0);
    scoreboard.saveSecondRoll(9);
    var total = 78;
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

});
