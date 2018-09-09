'use strict'

describe('features', function() {

  var scorecard;
  var frame1;
  var frame2;
  var frame3;
  var frame4;
  var frame5;
  var frame6;
  var frame7;
  var frame8;
  var frame9;
  var frame10;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame1 = new Frame();
    frame2 = new Frame();
    frame3 = new Frame();
    frame4 = new Frame();
    frame5 = new Frame();
    frame6 = new Frame();
    frame7 = new Frame();
    frame8 = new Frame();
    frame9 = new Frame();
    frame10 = new Frame();
  });



  describe('roll a frame and retrieve scores', function() {
    it('can return the result of a roll', function() {
      frame1.rollOne(0);
      frame1.rollTwo(0);
      scorecard.addFrame(frame1);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
    });


  it('can calculate the score of the first frame (2 gutterballs - 1 frame)', function() {
    frame1.rollOne(0);
    frame1.rollTwo(0);
    scorecard.addFrame(frame1);
    expect(scorecard.frameTotal(1)).toEqual(0);
  });

  // model a gutter game
  it('can calculate the score of the 10th frame (20 gutterballs)', function() {
    frame1.rollOne(0);
    frame1.rollTwo(0);
    scorecard.addFrame(frame1);
    frame2.rollOne(0);
    frame2.rollTwo(0);
    scorecard.addFrame(frame2);
    frame3.rollOne(0);
    frame3.rollTwo(0);
    scorecard.addFrame(frame3);
    frame4.rollOne(0);
    frame4.rollTwo(0);
    scorecard.addFrame(frame4);
    frame5.rollOne(0);
    frame5.rollTwo(0);
    scorecard.addFrame(frame5);
    frame6.rollOne(0);
    frame6.rollTwo(0);
    scorecard.addFrame(frame6);
    frame7.rollOne(0);
    frame7.rollTwo(0);
    scorecard.addFrame(frame7);
    frame8.rollOne(0);
    frame8.rollTwo(0);
    scorecard.addFrame(frame8);
    frame9.rollOne(0);
    frame9.rollTwo(0);
    scorecard.addFrame(frame9);
    frame10.rollOne(0);
    frame10.rollTwo(0);
    scorecard.addFrame(frame10);
    expect(scorecard.frameTotal(10)).toEqual(0);
  });

  it('will display the result of the current frame if there are no strikes or spares', function() {
    frame1.rollOne(5);
    frame1.rollTwo(3);
    scorecard.addFrame(frame1);
    expect(scorecard.frameTotal(1)).toEqual(8);
  });



  it('will display the cumulative result of the second frame, no strikes or spares', function() {
    frame1.rollOne(5);
    frame1.rollTwo(3);
    scorecard.addFrame(frame1);
    frame2.rollOne(1);
    frame2.rollTwo(3);
    scorecard.addFrame(frame2);
    expect(scorecard.frameTotal(2)).toEqual(12);
  });

  it('will display the cumulative result of the 5th frame, no strikes or spares', function() {
    frame1.rollOne(5);
    frame1.rollTwo(3);
    scorecard.addFrame(frame1);
    frame2.rollOne(1);
    frame2.rollTwo(3);
    scorecard.addFrame(frame2);
    frame3.rollOne(2);
    frame3.rollTwo(7);
    scorecard.addFrame(frame3);
    frame4.rollOne(3);
    frame4.rollTwo(2);
    scorecard.addFrame(frame4);
    frame5.rollOne(4);
    frame5.rollTwo(1);
    scorecard.addFrame(frame5);
    expect(scorecard.frameTotal(5)).toEqual(31);
  });

  // model the perfect game
  it('will correctly display the result given that every shot is a strike', function() {
    frame1.rollOne(10);
    scorecard.addFrame(frame1);
    expect(scorecard.frameTotal(1)).toEqual(null);
  });

  // model a no strikes or spares game
  // model a game with strikes and spares

});



});
