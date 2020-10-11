'use strict';

describe('BowlingGame', function() {
  
  beforeEach(function() {
  bowlingGame = new BowlingGame();
  })

  it('should be able to create a frame', function() {
    bowlingGame.create(Frame);
    expect(bowlingGame.frames[1].pinCount).toEqual(10);
  });

  // it('should have a maximumScore of 300', function() {
  //   expect(bowlingGame.maximumScore).toEqual(300);
  // });

  // describe('roll', function() {
  //   it('enables a player to roll pins and return score for game', function(){
  //     20.times
  //     expect(bowlingGame.roll(5)).toEqual(5);
  //   });
  // });

  // describe('gutter_game', function() {
  //   it('should total score 0 if rolls are all 0');
  //   expect(bowlingGame.totalScore).toEqual(0);
  // }); 








});