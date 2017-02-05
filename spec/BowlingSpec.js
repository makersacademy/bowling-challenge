'use strict';

describe("Bowling", function() {
  var game = new Bowling

  beforeEach(function() {
    game = new Bowling();

  it("Rolls a score of 2 per frame", function(){
    for (var i = 0; i < 20; i++) {
        game.roll(0);
     }
     expect(game.score()).toEqual(20);
  });

  it("Can roll #gutterGame", function(){
    for (var i = 0; i < 20; i++) {
      game.roll(1);
     }
     expect(game.score()).toEqual(20);

  });





});
