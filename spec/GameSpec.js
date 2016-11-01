'use strict';

describe('Game', function () {
    var game;

  beforeEach(function () {
    game = new Game();
  });

  it('can keep score on a simple frame', function() {
    spyOn(game, 'hits').and.returnValue(4);
    for(var i=1; i<=2; i++){
      game.roll();
    };
    expect(game.scoreTotal).toEqual(8);
  });

  it('can increase the roll count if first roll in frame', function() {
    spyOn(game, 'hits').and.returnValue(4);
    game.roll();
    expect(game.currentRoll).toEqual(2);
  });

  it('can reset the rolls and add to frames if second roll in frame', function() {
    spyOn(game, 'hits').and.returnValue(4);
    for(var i=1; i<=2; i++){
      game.roll();
    };
    expect(game.currentRoll).toEqual(1);
    expect(game.currentFrame).toEqual(2);
  });

  it('can reset pins appropriately if no strike', function() {
    spyOn(game, 'hits').and.returnValue(4);
    game.roll();
    expect(game.pins).toEqual(6);
    game.roll();
    expect(game.pins).toEqual(10);
  });

  it('will set game to being over after 10 frames without strikes or spares', function(){
    spyOn(game, 'hits').and.returnValue(4);
    for(var i=1; i<=20; i++){
      game.roll();
    };
    expect(game.scoreTotal).toEqual(80);
    expect(game.gameOver).toEqual(true);
  });


  it('can reset pins appropriately if there is a strike', function() {
    spyOn(game, 'hits').and.returnValue(10);
    game.roll();
    expect(game.pins).toEqual(10);
  });

  it('can skip to next frame if strike on first roll', function() {
    spyOn(game, 'hits').and.returnValue(10);
    game.roll();
    expect(game.currentRoll).toEqual(1);
    expect(game.currentFrame).toEqual(2);
  });

  it('can add bonus points correctly after strike', function() {
    spyOn(game, 'hits').and.returnValue(4);
    game.scoreMode = "strike";
    game.scoreTotal = 10;
    game.lastRollScore = 10;
    for(var i=1; i<=3; i++){
      game.roll();
    };
    expect(game.scoreTotal).toEqual(30)
  });

  it('can add bonus points after double strike', function() {
    spyOn(game, 'hits').and.returnValue(4);
    game.scoreMode = "doubleStrike";
    game.scoreTotal = 20;
    game.lastRollScore = 10;
    for(var i=1; i<=3; i++){
      game.roll();
    };
    expect(game.scoreTotal).toEqual(44)
  });

});
