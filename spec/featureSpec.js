'use strict'
// Question to ask in feature testing are you supposed to be using doubles / spies.....i dont think so but not sure
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

    describe('Gutter game', function() {
      it('can calculate the score of the first frame (2 gutterballs - 1 frame)', function() {
        frame1.rollOne(0);
        frame1.rollTwo(0);
        scorecard.addFrame(frame1);
        expect(scorecard.frameTotal(1)).toEqual(0);
      });
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
    });

    describe('No strikes or spares', function() {
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
      it('will display the cumulative result of the 10th frame, no strikes or spares', function() {
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
        frame6.rollOne(2);
        frame6.rollTwo(2);
        scorecard.addFrame(frame6);
        frame7.rollOne(2);
        frame7.rollTwo(2);
        scorecard.addFrame(frame7);
        frame8.rollOne(2);
        frame8.rollTwo(2);
        scorecard.addFrame(frame8);
        frame9.rollOne(2);
        frame9.rollTwo(2);
        scorecard.addFrame(frame9);
        frame10.rollOne(2);
        frame10.rollTwo(2);
        scorecard.addFrame(frame10);
        expect(scorecard.frameTotal(10)).toEqual(51);
      });
    });

    describe('Perfect game', function() {
      it('will record a null result of the first frame given there was a strike', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        expect(scorecard.frameTotal(1)).toEqual(null);
      });
      it('will record a null result of the second frame given all strikes', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        expect(scorecard.frameTotal(2)).toEqual(null);
      });
      it('will record result of 30 the first frame given all strikes in first 3 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        expect(scorecard.frameTotal(1)).toEqual(30);
      });
      it('will record result of 60 in the second frame given all strikes in the first 4 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        expect(scorecard.frameTotal(2)).toEqual(60);
      });
      it('will record result of 90 in the 3rd frame given all strikes in the first 5 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        expect(scorecard.frameTotal(3)).toEqual(90);
      });
      it('will record result of 120 in the 4th frame given all strikes in the first 6 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        frame6.rollOne(10);
        scorecard.addFrame(frame6);
        expect(scorecard.frameTotal(4)).toEqual(120);
      });
      it('will record result of 150 in the 5th frame given all strikes in the first 7 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        frame6.rollOne(10);
        scorecard.addFrame(frame6);
        frame7.rollOne(10);
        scorecard.addFrame(frame7);
        expect(scorecard.frameTotal(5)).toEqual(150);
      });
      it('will record result of 180 in the 6th frame given all strikes in the first 8 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        frame6.rollOne(10);
        scorecard.addFrame(frame6);
        frame7.rollOne(10);
        scorecard.addFrame(frame7);
        frame8.rollOne(10);
        scorecard.addFrame(frame8);
        expect(scorecard.frameTotal(6)).toEqual(180);
      });
      it('will record result of 210 in the 7th frame given all strikes in the first 9 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        frame6.rollOne(10);
        scorecard.addFrame(frame6);
        frame7.rollOne(10);
        scorecard.addFrame(frame7);
        frame8.rollOne(10);
        scorecard.addFrame(frame8);
        frame9.rollOne(10);
        scorecard.addFrame(frame9);
        expect(scorecard.frameTotal(7)).toEqual(210);
      });
      it('will record result of 240 in the 8th frame given all strikes in the first 10 frames', function() {
        frame1.rollOne(10);
        scorecard.addFrame(frame1);
        frame2.rollOne(10);
        scorecard.addFrame(frame2);
        frame3.rollOne(10);
        scorecard.addFrame(frame3);
        frame4.rollOne(10);
        scorecard.addFrame(frame4);
        frame5.rollOne(10);
        scorecard.addFrame(frame5);
        frame6.rollOne(10);
        scorecard.addFrame(frame6);
        frame7.rollOne(10);
        scorecard.addFrame(frame7);
        frame8.rollOne(10);
        scorecard.addFrame(frame8);
        frame9.rollOne(10);
        scorecard.addFrame(frame9);
        frame10.rollOne(10);
        scorecard.addFrame(frame10);
        expect(scorecard.frameTotal(8)).toEqual(240);
      });
      // THIS IS WHERE IT BREAKS DOWN AND WE NEED TO LOOK AT THE FINAL FRAME FUNCTIONALITY!!
    });

    describe('testing spares logic', function() {
      
    })
  });
});
