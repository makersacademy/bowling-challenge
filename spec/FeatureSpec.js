'use strict';

describe('Feature test:', function(){
var player;
var game;
var roll;
var rollTwo;

beforeEach(function(){
  player = new Player();
  game = new Game();
  roll = new Roll();
  rollTwo = new Roll();
});

// As a player,
// in order to play bowling
// I can start the game by making a first roll

  it('player can start game by making a first roll', function(){
    player.makeRoll(game,roll);
    expect(game.frameNumber()).toEqual(1);
    expect(game.rollNumber()).toEqual(1);
  });

  // As a player,
  // in order to earn points
  // I can knock down pins with my first roll

  it('can earn 9 points in first roll by knocking down 9 pins', function(){
    spyOn(Math,'random').and.returnValue(0.65)
    player.makeRoll(game,roll);
    expect(game.score()).toEqual(9);
  });

  // As a player,
  // in order to earn more points
  // I can make a second roll to knock additional pins, if any left

  describe('after knocking down 7 pins in first roll', function(){

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0.13)
      player.makeRoll(game,roll);
    });

    it('can earn 2 additional points in second roll by knocking down 2 additional pins', function(){
      spyOn(roll, 'secondRollRandomizer').and.returnValue(2)
      player.makeRoll(game,roll);
      expect(game.score()).toEqual(9);
    });

    it('can earn 3 additional points in second roll by knocking down 3 additional pins', function(){
      spyOn(roll, 'secondRollRandomizer').and.returnValue(3)
      player.makeRoll(game,roll);
      expect(game.score()).toEqual(10);
    });
  });

  // As a player,
  // in order to make progress in the game
  // I can start a new frame after two rolls or when I knocked down all the pins after one roll

  

});
