'use strict';

describe('Frame', function() {
  var game
  var frame;

  beforeEach(function() {
    frame = new Frame(game);
    game = new Game
  });

  describe("A frame:", function(){
    it('only bowls once if you get a strike', function(){
      spyOn(Math, 'random').and.returnValue(1);
      frame.bowlFrame(game);
      expect(frame.currentFrame.length).toEqual(1);
    });
    it('bowls again if you do not get a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      frame.bowlFrame(game);
      expect(frame.currentFrame.length).toEqual(2);
    });
    it('cannot have a frame totalling more than 10', function(){
      frame.bowlFrame(game);
      expect(frame.currentFrame[0]+frame.currentFrame[1]).toBeLessThan(11)
    });
    // it('adds the frame to the game array upon completion', function(){
    //   frame.bowlFrame(game);
    //   expect(frame.frame.length).toEqual(1)
    // });
  });
});
