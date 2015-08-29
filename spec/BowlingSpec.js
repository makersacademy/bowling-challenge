describe('BowlingScore', function(){

  beforeEach(function(){
    bowlingScore = new BowlingScore
  });

  var bowlingScore

  it('starts at 0', function(){
    expect(bowlingScore.score).toBe(0);
  });

  it('starts at frame 1', function(){
    expect(bowlingScore.currentFrame).toEqual([]);
  });

  it('starts with 10 pins', function(){
    expect(bowlingScore.framePinCount).toBe(10);
  });

  it('starts at ball per frame one', function(){
    expect(bowlingScore.currentBall).toBe(1);
  });

  describe('roll', function(){

    it('increments currentBall ', function(){
      bowlingScore.roll(1);
      expect(bowlingScore.currentBall).toBe(2);
    });

    it('adds frame to frame after 2 ball rolled', function(){
      bowlingScore.roll(1);
      bowlingScore.roll(1);
      expect(bowlingScore.bowlingFrames).toEqual([[1,1]]);
    });

    it('reduces framePinCount', function(){
      bowlingScore.roll(1);
      expect(bowlingScore.framePinCount).toEqual(9);
    });

    it('reduces framePinCount', function(){
      bowlingScore.roll(5);
      expect(bowlingScore.framePinCount).toEqual(5);
    });

    it('does not allow > 10 pins per frame', function(){
      expect(function() {bowlingScore.roll(11)} ).toThrow(new Error("only 10 pins per frame"));
    });

  });

});