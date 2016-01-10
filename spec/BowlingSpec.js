describe("Bowling", function() {
  var bowling;
  var frame;

  beforeEach(function() {
    frame = {rolls: [1,2], record: null, calculateScore: 3, score: 3, bonus: 1};
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
      spyOn(frame, 'record');
      spyOn(frame, 'calculateScore');
      bowling.play(1,2);
      bowling.calculateFrameScore();
      bowling.calculateTotalScore();
      expect(bowling.totalScore).toEqual(3);
    });
  });

  describe('Playing', function() {
    it('prevents a player from playing more than 10 frames', function() {
      spyOn(frame, 'record');
      for(i=0; i<10; i++) {
        bowling.play(1,5);
      }
      expect(function(){bowling.play(1,5);}).toThrow(new Error("You have already played 10 frames."));
    });

    xit('allows a player to get a bonus if they score a strike', function() {

    });

    it('allows a player to get a bonus if they score a spare', function() {
      spyOn(frame, 'record').and.returnValue([7,3],[1,2]);
      spyOn(frame, 'calculateScore').and.returnValue(10);
      spyOn(frame, 'score').and.returnValue(10);
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
