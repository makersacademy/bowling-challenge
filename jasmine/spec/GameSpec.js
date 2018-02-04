describe('Game', function() {

  var game, frame, roll, frames, frameScore, runningTotal;

  beforeEach(function() {
    game = new Game();
    roll = new Roll(game, frame);
    frameScore = [];

  });

  describe('beginning of Game', function(){
    it('starts a new game', function(){
        expect(game).toEqual(game)
    });
    it('is empty before game starts', function(){
        expect(game.frames).toEqual([]);
    });
  });

  describe('Frames', function() {
    it('begins a new frame', function() {
      expect(frame).toEqual(frame);
    });
    it('is empty before frame is called', function(){
        expect(frameScore).toEqual([]);
    });
    it('accepts scores for the frame', function(){
      roll.roll(3,0);
      expect(this.scores).not.toEqual([]);
    });
  });

  describe('returns scores for first frame', function(){
    // it('returns my score', function() {
    //   roll.roll(7, 0);
    //   expect(roll.frameScore).toEqual('{ Ball 1: : 7, Ball 2:: 0, Strike: : false, Spare: : false }');
    // });
    it('bowls a STRIKE (10 points in 1 ball)', function(){
      roll.roll(10, 0);
      expect(roll.isStrike).toEqual(true);
    });
    it('bowls a SPARE (10 points in 2 balls)', function(){
      roll.roll(4, 6);
      expect(roll.isSpare).toEqual(true);
    });
    it('bowls a normal score (under 10 in two balls)', function(){
      roll.roll(1, 3);
      expect(roll.isSpare).toEqual(false);
    });
  });

  describe('accrues bonus points after scoring strike', function(){
    it('scores STRIKE in Frame 1, add Frame 2 scores to Frame 1 score', function() {
      roll.roll(10, 0);
      roll.roll(3, 4);
      // expect(game.runningTotal).toEqual(60);
      expect(roll.scoreSoFar).toEqual(17);
    });

  });
  describe('returns a running total', function(){
    it('gets running total after 4 frames (no strikes or spares)', function() {
      for (var i = 0; i < 4; i++) {
        roll.roll(i*2, i+3);
      }
      expect(game.runningTotal).toEqual(60);
    });
  });
  describe('10 frames in total', function(){
    it('loops through 10 frames', function() {
      for (var i = 0; i < 10; i++) {
        roll.roll(1, 4);
      }
      expect(game.frames.length).toEqual(20);
    });
  });
});
