'use strict';

describe('game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  });

  let multiRoll = function (pins, rounds) {
    for(let i = 0; i < rounds; i++) {
      game.roll(pins)
    }
  };

  describe('guttergame', function() {
    it('can roll all zeros' , function() {
    multiRoll(0,20)
    expect(game.score()).toBe(0)
    })
  })

  describe('can roll a normal game', function() {
    it('roll one 20 times and score 20', function(){
     multiRoll(1,20)
     expect(game.score()).toEqual(20)
    })
  })

  describe('spare game', function(){
    it('can roll a spare game', function(){
      game.roll(8)
      game.roll(2)
      game.roll(4)
      multiRoll(0,17)
      expect(game.score()).toEqual(18)
    })
  })

  describe('strike game', function(){
    it('can roll a strike', function(){
      game.roll(10)
      game.roll(5)
      game.roll(3)
      multiRoll(0,16)
      expect(game.score()).toEqual(26)
    })
    
    it('can calculate final strike frame correctly', function(){
      multiRoll(3,18)
      game.roll(10)
      game.roll(7)
      game.roll(2)
      expect(game.score()).toEqual(73)
    })

    it('can roll a perfect game', function(){
      multiRoll(10,12)
      expect(game.score()).toEqual(300)
    })
  })

})

