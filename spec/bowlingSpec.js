describe('bowling: ', function() {

  var player1;
  var score1;

  beforeEach(function() {
    player1 = new Player();
    score1 = new Score();
    roll1 = player1.roll(score1);
    roll2 = player1.roll(score1);
  });

  it('the player knocks down 0-10 pins when they roll',function() {
    expect(roll1).toBeGreaterThan(-1);
    expect(roll1).toBeLessThan(11);
  });

  describe('scoring: ', function() {

    it('stores the most recent roll', function() {
      expect(score1._mostRecentRoll).toEqual(roll2);
    });

    it('moves the "current roll" to "previous roll" when the ball is rolled again', function() {
      expect(score1._previousRoll).toEqual(roll1);
      expect(score1._mostRecentRoll).toEqual(roll2);
    });

    it('stores the frame when the frame is finished (not strike)', function() {
      expect(score1._allFrames[0][0]).toEqual(roll1);
      expect(score1._allFrames[0][1]).toEqual(roll2);
    });

    it('moves the current frame to the frame history when the frame is finished', function() {
      console.log('roll 1: ' + roll1);
      console.log('roll 2: ' + roll2);

      roll3 = player1.roll(score1);
      roll4 = player1.roll(score1);
      //
      console.log('roll 3: ' + roll3);
      console.log('roll 4: ' + roll4);
      console.log('all frames: ' + score1._allFrames)
      console.log('current frame: ' + score1._currentFrame)
      console.log('roll count: ' + rollCount);
      expect(score1._allFrames[0][0]).toEqual(roll1);
      expect(score1._allFrames[0][1]).toEqual(roll2);
    });

  });

});

// it('stores a strike in the first frame if the player rolls a strike', function() {
//   spyOn(score1, 'mostRecentRoll').and.returnValue(10);
//   expect(XXX).toEqual(10);
// });
