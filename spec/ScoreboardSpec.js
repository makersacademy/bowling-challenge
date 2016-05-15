'use strict';

describe('Scoreboard', function() {
  var scoreboard;
  var hits;
  var expectedHits;


  beforeEach(function() {
    scoreboard = new Scoreboard();
    hits = 4;
    expectedHits = 4;

  });

  it('initializes with an empty frames array', function(){
    expect(scoreboard.frames.length).toEqual(0);
  });

  it('#nextFrame advances to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('can save information about first roll of frame', function(){
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    expect(scoreboard.frames[0].roll1).toEqual(expectedHits);
  });

  it('can save information about the second roll of frame and creates new frame', function() {
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.frames[0].roll2).toEqual(expectedHits);
    expect(scoreboard.frames.length).toEqual(2);

  });

  it('can not save a second roll if first roll value is null', function() {
    scoreboard.nextFrame();
    var message = 'Must roll first ball silly';
    expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
  });


  it('returns total score of frame', function() {
    var total = hits + hits;

    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

  it('creates a new frame and saves the points when player gets a strike', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    expect(scoreboard.getCurrentScore()).toEqual(strike);
    expect(scoreboard.frames.length).toEqual(2);
  });


  it('returns total score including bonuses the round after a strike', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    var bonus = (hits + hits) * 2;
    expect(scoreboard.getCurrentScore()).toEqual(strike + bonus);
  });

  it('returns total score with bonuses after two strikes in a row (a double)', function() {
    var strike = 10;
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(strike);
    scoreboard.saveFirstRoll(strike);

    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    var total = ( (strike+(strike+hits)) + (strike+(hits+0) + (hits+hits)) );
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });


  it('returns total score with bonuses after three strikes in a row (a turkey)', function() {
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


  it('It returns total score when player got a spare the previous round', function() {
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(6);

    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);

    var total = ((hits*3) + 6) + hits;
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });


});
