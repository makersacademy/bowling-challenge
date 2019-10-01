'use strict';

describe('Scorecard', function(){

  var scorecard;
  var knockedPins;
  var MAXIMUM_NUMBER_OF_ROLLS = 20;

  beforeEach(function(){
    scorecard = new Scorecard();
    knockedPins = 4
  });

  it('checks if it is not full', function(){
    expect(scorecard.isFull()).toBe(false)
  });

  it('checks if it is full', function(){
    for (var i = 0; i <= MAXIMUM_NUMBER_OF_ROLLS; i++){
    scorecard.recordRoll(knockedPins)
    };
    expect(scorecard.isFull()).toEqual(true)
  });

  it('returns knocked pins when there is none', function(){
    expect(scorecard.knockedPinsRoll(1)).toEqual(0)
  });

  it('returns knocked pins when there is one', function(){
    scorecard.recordRoll(knockedPins)
    expect(scorecard.knockedPinsRoll(1)).toEqual(knockedPins)
  });

  it('sorts 20 rolls in 10 frames', function(){
    for (var i = 0; i <= MAXIMUM_NUMBER_OF_ROLLS; i++){
      scorecard.recordRoll(knockedPins)
      };
     expect(scorecard.frames.length).toEqual(10)
  });

  it('calculates score for one frame', function(){
    for (var i = 0; i <= MAXIMUM_NUMBER_OF_ROLLS; i++){
      scorecard.recordRoll(knockedPins)
      };
    expect(scorecard.scoreFrame(1)).toEqual(8)
  });

  it('enables the 10th frame to contain 3 rolls', function(){
    for (var i = 0; i <= MAXIMUM_NUMBER_OF_ROLLS; i++){
      scorecard.recordRoll(knockedPins)
      };
      expect(scorecard.scoreFrame(10)).toEqual(12)
  });

  it('calculates the total score', function(){
    for (var i = 0; i <= MAXIMUM_NUMBER_OF_ROLLS; i++){
      scorecard.recordRoll(knockedPins)
      };
    expect(scorecard.scoreTotal()).toEqual(knockedPins*MAXIMUM_NUMBER_OF_ROLLS)
  });

  

  // it('calculates score for one frame if it is a spare', function(){
    
  // });

  // it('calculates score for one frame if it is a strike', function(){
    
  // });

  // it('makes sure we can not cheat when we enter pins', function(){
    
  // });

  
  // it('enables the user to play again', function(){
    
  // });

});
