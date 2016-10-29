'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("A frame:", function(){
    it('only bowls once if you get a strike', function(){
      spyOn(Math, 'random').and.returnValue(1);
      bowling.bowlFrame();
      expect(bowling.currentFrame.length).toEqual(1);
    });
    it('bowls again if you do not get a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      bowling.bowlFrame();
      expect(bowling.currentFrame.length).toEqual(2);
    });
    it('cannot have a frame totalling more than 10', function(){
      bowling.bowlFrame();
      expect(bowling.currentFrame[0]+bowling.currentFrame[1]).toBeLessThan(11)
    });
    it('adds the frame to the game array upon completion', function(){
      bowling.bowlFrame();
      expect(bowling.game.length).toEqual(1)
    });
  });

  describe("Frame outcome:", function(){
    it("adds 'strike' to the outcome array if a frame generates at strike", function() {
      spyOn(Math, 'random').and.returnValue(1);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      console.log(bowling.currentFrame)
      expect(bowling.outcomes[(bowling.outcomes.length) - 1]).toEqual("strike");
    });
    it("adds 'spare to the outcome array if a frame generates a spare'", function() {
      spyOn(bowling, 'currentFrame').and.returnValue([5,5]);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      console.log(bowling.currentFrame)
      expect(bowling.outcomes[(bowling.outcomes.length) - 1]).toEqual("spare");
    });

  });

  describe("A bowl:", function(){
    it('generates a random number', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(bowling.bowl()).toEqual(9);
    });
  });
});
