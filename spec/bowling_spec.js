describe('Features', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new ScoreCard();
    frame1 = new Frame();
  });

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
