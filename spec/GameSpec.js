'use strict';

describe ("Bowling Game", function() {

var game;

beforeEach(function(){
  game = new Game();
});

var gameRolls, rollSpare;

gameRolls = function gameRolls(rolls, pins){
  for(var i = 0; i < rolls; i++){
    game.roll(pins);
  }
};

rollSpare = function rollSpare(){
  game.roll(5);
  game.roll(5);
}

  describe ("Gutter Game", function() {
    it ("should score 0", function() {
      gameRolls.call(this.game, 20, 0);
      expect(game.score()).toEqual(0);
    });
  });

  describe ("Each roll hits 1 pin", function() {
    it ("should score 20", function() {
      gameRolls.call(this.game, 20, 1);
      expect(game.score()).toEqual(20);
    });
  });

  describe ("One spare", function() {
    it ("should score 10 + bonus", function() {
      rollSpare.call(game);
      game.roll(5);
      expect(game.score()).toEqual(20);
    });
  });
});
