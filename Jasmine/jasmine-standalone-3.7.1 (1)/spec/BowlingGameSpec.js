'use strict';

describe('BowlingGame', function(){
  let newGame;
  let testRoll1 = 5;
  let testRoll2 = 2;
  let testStrike = 10;
  let testSpare1 = 3;
  let testSpare2 = 7;

  beforeEach(function() {
    newGame = new BowlingGame();
  });

  describe('starts a new game', function(){
    it('with a new game default set up', function(){
      expect(newGame.currentFrame).toBe(1);
      expect(newGame.strike).toBe(false);
      expect(newGame.spare).toBe(false);
      expect(newGame.newScorecard).toBeInstanceOf(Scorecard);
    });
  });

  describe('roll1', function(){
    it('confirmation of roll 1 complete', function(){
      expect(newGame.roll1(testRoll1)).toEqual("Nice roll! Let's Roll again!");
      expect(newGame.roll1(testRoll2)).toEqual("Nice roll! Let's Roll again!");
    });
  });

  describe('roll2', function(){
    it('confirmation of roll 2 complete', function(){
      expect(newGame.roll2(testRoll1)).toEqual("Great Job! That's the end of this frame");
      expect(newGame.roll2(testRoll2)).toEqual("Great Job! That's the end of this frame");
    });
  });

  describe('roll3', function(){
    it('confirmation of only being able to roll a third ball in the 10th frame', function(){
      expect(newGame.roll3(testRoll1)).toEqual("You can only roll a third time in the 10th frame");
      expect(newGame.roll3(testRoll2)).toEqual("You can only roll a third time in the 10th frame");
    });
  });

  describe('player gets a strike', function(){
    beforeEach(function() {
      newGame.roll1(testStrike)
    });
    it('comfirms player has got a strike', function(){
      expect(newGame.roll1(testStrike)).toEqual("Strike!")
  });

  it('changes strike to true when the first roll has a value of 10', function(){
    expect(newGame.strike).toEqual(true)
  });

  it('changes strike back to false when bonus is added to scorecard', function(){
    newGame.roll1(testRoll1)
    newGame.roll2(testRoll2)
    expect(newGame.strike).toEqual(false)
    });
  });

  describe('player gets a spare', function(){
    beforeEach(function() {
    newGame.roll1(testSpare1);
    newGame.roll2(testSpare2);
  });

    it('comfirms player has got a spare', function(){
      newGame.roll1(testSpare1)
      expect(newGame.roll2(testSpare2)).toEqual("Spare!");
    });

    it('changes spare to true when the roll 1 and 2 equal 10', function(){
      expect(newGame.spare).toEqual(true);
    });

    it('changes spare back to false when bonus is added to scorecard', function(){
      newGame.roll1(testRoll1)
      newGame.roll2(testRoll2)
      expect(newGame.spare).toEqual(false);
    });
  });

  describe('.next_frame', function(){
    it('increases the frame number for each frame played', function(){
      for(let i=0; i<3; i++){
        newGame.nextFrame()
      }
      expect(newGame.currentFrame).toEqual(4);
    });

    it('increases the frame number by 1 when adding to scorecard is complete', function(){
      newGame.updateScorecard()
      expect(newGame.currentFrame).toEqual(2);
    });
  });

  describe('10th frame', function() {
      it('allows a third roll if in the 10th frame the first roll equals a strike or spare', function(){
      for(let i=0; i<9; i++){
        newGame.roll1(testRoll1)
        newGame.roll2(testRoll2)
      }
      newGame.roll1(testStrike)
      newGame.roll2(testRoll1)
      expect(newGame.roll3(testRoll2)).not.toEqual("You can only roll a third time in the 10th frame");
    });
  });

  describe('endOfGame', function() {
    it('returns a confrimation of game ending', function() {
      expect(newGame.endOfGame()).toBe("End of game");
    });

    it('returns a confrimation of game ending after roll 3', function() {
      for(let i=0; i<9; i++){
        newGame.roll1(testRoll1)
        newGame.roll2(testRoll2)
      }
      newGame.roll1(testStrike)
      newGame.roll2(testRoll1)
      newGame.roll3(5)
      expect(newGame.nextFrame()).toEqual("End of game");
    });
  });
});
