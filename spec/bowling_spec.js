describe('Features', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new ScoreCard();
    frame1 = new Frame();
  });

 function setUpFramesForTest() {
      frame2 = new Frame();
      frame3 = new Frame();
      frame4 = new Frame();
      frame5 = new Frame();
      frame6 = new Frame();
      frame7 = new Frame();
      frame8 = new Frame();
      frame9 = new Frame();
      frame10 = new Frame();
  }

  it('scorecard total starts at 0', function () {
    expect(scorecard.totalScore).toEqual(0);
  })

  it('can set a frame complete if score adds up to 10', function (){
     frame1.rolls[0] = 5;
     frame1.rolls[1] = 5;
     frame1.setFrameComplete();
     expect(frame1.isComplete()).toEqual(true)
  })
  it('does not set a frame complete if there is a throw to be played and score is not equal to 10', function (){
      frame1.rolls[0] = 5;
      frame1.setFrameComplete();
      expect(frame1.isComplete()).toEqual(false)
  })
  it('can set a frame complete if there were two throws that do not add up to 10', function () {
      frame1.rolls[0] = 2;
      frame1.rolls[1] = 4;
      frame1.setFrameComplete();
      expect(frame1.isComplete()).toEqual(true)
  })
  it('can add up the score of a gutter game that results in a zero score.', function () {
      setUpFramesForTest();
      frame1.rolls[0] = 0;
      frame1.rolls[1] = 0;
      frame1.setFrameComplete();
      frame2.rolls[0] = 0;
      frame2.rolls[1] = 0;
      frame2.setFrameComplete();
      frame3.rolls[0] = 0;
      frame3.rolls[1] = 0;
      frame3.setFrameComplete();
      frame4.rolls[0] = 0;
      frame4.rolls[1] = 0;
      frame4.setFrameComplete();
      frame5.rolls[0] = 0;
      frame5.rolls[1] = 0;
      frame5.setFrameComplete();
      frame6.rolls[0] = 0;
      frame6.rolls[1] = 0;
      frame6.setFrameComplete();
      frame7.rolls[0] = 0;
      frame7.rolls[1] = 0;
      frame7.setFrameComplete();
      frame8.rolls[0] = 0;
      frame8.rolls[1] = 0;
      frame8.setFrameComplete();
      frame9.rolls[0] = 0;
      frame9.rolls[1] = 0;
      frame9.setFrameComplete();
      frame10.rolls[0] = 0;
      frame10.rolls[1] = 0;
      frame10.setFrameComplete();
      expect(scorecard.totalScore).toEqual(0);
  })
})

describe('Unit tests', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new ScoreCard();
    frame1 = new Frame();
  });
  it('frames can be generated and hold a score', function () {
    expect(frame1.score).toEqual(0);
  })
  it('frames hold an array of two rolls', function () {
      expect(frame1.rolls).toEqual([null, null]);
  })
  it('can accept new values to the rolls', function () {
      frame1.rolls[0] = 2;
      frame1.rolls[1] = 3;
      expect(frame1.rolls).toEqual([2,3]);
  })
  it('the two rolls, when modified get added to the frame score', function () {
      frame1.rolls[0] = 2;
      frame1.rolls[1] = 3;
      frame1.addScore()
      expect(frame1.score).toEqual(5);
  })
  it('each frame rolls can not add up to more than 10', function () {
      frame1.rolls[0] = 9;
      frame1.rolls[1] = 2;
      expect(function (){frame1.addScore()} ).toThrow(new Error("Score error: rolls cannot add up to more than 10"))
  })
  it('has a test to see if a frame is complete', function () {
      expect(frame1.isComplete()).toEqual(false)
  })

  it('can set a frame complete', function () {
      frame1.rolls[0] = 10;
      frame1.setFrameComplete()
      expect(frame1.isComplete()).toEqual(true)
  })

})
