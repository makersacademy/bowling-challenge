describe('ScoreCard', function() {

  var scoreCard

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('frames', function() {
    it('has a default of 1 frames', function() {
      expect(scoreCard._frames).toEqual(1);
    });
    it('has a maximum of 10 frames', function() {
      for(i = 1; i < 11; i++) {
        scoreCard.newFrame()
      }
      expect(function() { scoreCard.newFrame(); }).toThrowError("There cannot be more than 10 frames in a game")
    });
  });

  describe('total', function() {
    it('is zero by default', function() {
      expect(scoreCard.total).toEqual(0);
    });
  });

  describe('roll', function() {
    it('accepts an integer score', function() {
      expect(function() { scoreCard.roll("not a number"); }).toThrowError("Please enter a number between 0 and 10");
    });
    it('does not accept numbers lower than 0', function() {
      expect(function() { scoreCard.roll(-1); }).toThrowError("Please enter a number between 0 and 10");
    });
    it('does not accept numbers higher than 10', function() {
      expect(function() { scoreCard.roll(11); }).toThrowError("Please enter a number between 0 and 10");
    });
  });

  describe('game', function() {
    it('is empty by default', function() {
      expect(scoreCard.game).toEqual({});
    });
  });


  describe('frame', function() {
    it('is added to the game', function() {
      scoreCard.newFrame()
      expect(scoreCard.game).toEqual({frame1: {roll1: 0, roll2: 0, bonus: 0}});
    });
    it('can add multiple frames to the game', function() {
      scoreCard.newFrame()
      scoreCard.newFrame()
      expect(scoreCard.game).toEqual({frame1: {roll1: 0, roll2: 0, bonus: 0}, frame2: {roll1: 0, roll2: 0, bonus: 0}});
    });
    it('increases the frame counter by 1', function() {
      scoreCard.newFrame();
      expect(scoreCard._frames).toEqual(2);
    });
    it('includes the score from one roll', function() {
      scoreCard.newFrame();
      scoreCard.roll(5)
      expect(scoreCard.game).toEqual({frame1: {roll1: 5, roll2: 0, bonus: 0}})
    });
  });

});
