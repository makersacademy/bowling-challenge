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
      expect(bowling.spareOrStrike[(bowling.spareOrStrike.length) - 1]).toEqual("strike");
    });
    it("adds 'spare' to the outcome array if a frame generates a spare'", function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      expect(bowling.spareOrStrike[(bowling.spareOrStrike.length) - 1]).toEqual("spare");
    });
    it("adds 'neither' to the outcome array if neither a spare or strike is bowled", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      expect(bowling.spareOrStrike[bowling.spareOrStrike.length - 1]).toEqual('neither');
    });

  });

  describe("A bowl:", function(){
    it('generates a random number', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(bowling.bowl()).toEqual(9);
    });
  });

  describe("Bonuses:", function(){
    it('adds a bonus of your next bowl when a spare is scored', function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.9);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      expect(bowling.bonuses[bowling.bonuses.length-2]).toEqual([5])
    });
    it('adds both of the bowls scores from your next frame (if not a strike) as a bonus when a strike is scored', function(){
      spyOn(Math, 'random').and.returnValues(1, 0.3, 0.2);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      expect(bowling.bonuses[bowling.bonuses.length-2]).toEqual([3, 1])
    });
    it('adds bonuses from separate frames if two strikes are scored in a row', function(){
      spyOn(Math, 'random').and.returnValues(1, 1, 1);
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      bowling.bowlFrame();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      bowling.determineOutcomeofFrame();
      bowling.calculateBonuses();
      console.log(bowling.game)
      console.log(bowling.spareOrStrike)
      console.log(bowling.bonuses)
      expect(bowling.bonuses[bowling.bonuses.length-3]).toEqual([11, 11])

    });
  });

});
