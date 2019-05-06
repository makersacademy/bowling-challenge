'use strict';

describe ("Bowling Game", function() {

var game;

beforeEach(function(){
  game = new Game();
});

var gameRolls, rollSpare, rollStrike;

gameRolls = function gameRolls(rolls, pins){
  for(var i = 0; i < rolls; i++){
    game.roll(pins);
  }
};

rollSpare = function rollSpare(){
  game.roll(5);
  game.roll(5);
}

rollStrike = function rollSpare(){
  game.roll(5);
  game.roll(3);
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
      gameRolls.call(game, 17, 0)
      expect(game.score()).toEqual(20);
    });
  });

  describe ("One strike", function() {
    it ("should score 20 + bonus", function() {
      rollStrike.call(game);
      game.roll(5);
      game.roll(3);
      gameRolls.call(17, 0);
      expect(game.score()).toEqual(26);
    });
  });

  describe ("Perfect Game", function() {
    it ("should score 300, (12 strikes inc bonus)", function() {
      gameRolls.call(12, 10);
      expect(game.score()).toEqual(300);
    });
  });
});
