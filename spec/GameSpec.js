'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("1 frame game, no strikes or spares", function(){
    frame = new Frame(4,5);
    game.addFrame(frame);
    expect(game.finalScore()).toEqual(9);
  });

  it("10 frame game, no strikes or spares", function(){
    frame = new Frame(4,5);
    var zeroScoreFrame = new Frame(0,1);
    for ( var x = 0; x < 5; x++ ) {
      game.addFrame(frame);
      game.addFrame(zeroScoreFrame);
    }
    console.log(game);
    expect(game.finalScore()).toEqual(50);

  });

});
