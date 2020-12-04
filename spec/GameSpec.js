'use strict';

describe('Game', () => {
  var frame;
  var game;

  beforeEach(function(){
  frame = jasmine.createSpyObj('frame', ['knocked']);
  game = new Game(frame);
  });

  describe('constructor', () => {

    it('has property frames, with array of frame objects', () => {
      expect(game.frames()).toEqual([frame]);
    });

  });

  describe('roll', () => {

    describe('standard frame', () => {
      game.roll();
      
    });

  })


});