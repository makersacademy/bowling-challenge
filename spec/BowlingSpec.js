describe("Bowling", function() {
  var bowling;
  var frame;

  beforeEach(function() {
    frame = {
      record: function() {},
      calculateScore: function() {},
    }
    // {rolls: [1,2], record: null, calculateScore: 3, score: 3, bonus: 1};
    bowling = new Bowling(frame);
  });

  describe('Frames', function() {
    it('stores the player\'s frames', function() {
      spyOn(frame, 'record');
      bowling.play(1,2);
      expect(bowling.frames).toEqual([frame]);
    });

    it('after the frame has been played, current frame is cleared', function() {
      spyOn(frame, 'calculateScore');
      bowling.calculateFrameScore();
      expect(bowling.currentFrame).toEqual(null);
    });
  });

  describe('Scoring', function() {
    it('gives a total score', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,2]);
      spyOn(frame, 'calculateScore').and.returnValue(frame.score = (1+2));
      bowling.play(1,2);
      bowling.calculateFrameScore();
      bowling.calculateTotalScore();
      console.log(bowling.frames);
      expect(bowling.totalScore).toEqual(3);
    });
  });

  describe('Playing', function() {
    it('prevents a player from playing more than 10 frames', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,5]);
      var i = 0;
      for(i=0; i<10; i++) {
        bowling.play(1,5);
        bowling.calculateFrameScore();
      }
      expect(function(){bowling.play(1,5);}).toThrow
      (new Error("You have already played 10 frames."));
    });

    it('allows a player to get a bonus if they score a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0]);
      spyOn(frame, 'calculateScore');
      bowling.play(10,0);
      bowling.calculateFrameScore();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(3);
    });

    it('allows a player to get a bonus if they score a spare', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [7,3]);
      spyOn(frame, 'calculateScore').and.returnValue(frame.score=(7+3));
      bowling.play(7,3);
      bowling.calculateFrameScore();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(1);
    });

    xit('allows a player to play a third roll in the 10th frame if they have scored a strike', function() {

    });

    xit('allows a player to play a third roll in the 10th frame if they have scored a spare', function() {

    });
  });
});
