'use strict';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });



  describe('generic rules', ()  => {
      it('starts with a score of 0', () => {
        expect(game.score).toEqual(0);
      });

      it("tracks the pins that have fallen at each roll", () => {
          game.roll(5);
          game.roll(4);
          game.roll(10);
          expect(game.rollsTracker).toEqual([5, 4, 10]);
      });

      it('knows which frame we are at each stage', () => {
        game.roll(5);
        game.roll(4);
        expect(game.frameNumber).toEqual(2);
        game.roll(10);
        expect(game.frameNumber).toEqual(3);
        game.roll(9);
        game.roll(1);
        expect(game.frameNumber).toEqual(4);  
      });

      it('knows that a 2nd roll cannot knock more pins out than what is left after the first roll',()  => {
        expect(() => {game.roll(11)}).toThrowError('This is not a valid input!');
      });

      it('2nd roll can not knock more pins than what is left, () => {
        game.roll(5);
        expect(() => {game.roll(6)}).toThrowError('You cannot enter that number!');
      });
    //   it('knows that it\s not possible to play more than 10 frames', function() {
    //   });
    // });

    // describe('from frame 1 to 9', function() {
    //   it('knows that a frame is over when a strike happens', function() {
    //   });
    // });

    // describe('on the 10th frame', function() {
    //   it('knows that a strike on the first roll means an additional 2 rolls to play', function() {
    //   });

    //   it('knows that a spare on the 2nd roll means an additional roll to play', function() {
    //   });
    // });

    // describe('total score calculation', function() {
    //   it('calculates the frame score and adds it to the total right away if the sum of that frame is inferior to 10', function() {
    //   });

    //   it('after a spare, calculates the frame score and adds it to the total only after a spare roll has been made', function() {
    //   });

    //   it('after a strike, calculates the frame score and adds it to the total only after 2 spare rolls have been made', function() {
    //   });
    // });

    // describe('gameplay', function() {
    //   it('a player can play a standard game and get the expected score', function() {
    //   });

    //   it('a player can play a gutter game and get the expected score: a big fat 0!', function() {
    //   });

    //   it('a player can play a perfect game and get the expected score: an amazing 300!', function() {
    //   });
    // });

    // describe('to restart a game',       function() {
    //   it('a player has the option to reset the total score to 0', function() {
    //   });
     });
});