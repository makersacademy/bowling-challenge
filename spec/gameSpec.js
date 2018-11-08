describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("getTotalScore", function() {
    it("returns the current score", function () {
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      game.updateTotalScore(frameScore);
      expect(game.getTotalScore()).toBe(6);
    });
  });

  describe("frameNumber", function() {
    it("starts at one", function() {
      expect(game.getFrameNumber()).toBe(1)
    });

    it("tracks the frame number that the user is on", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      game.updateTotalScore(frameScore)
      expect(game.getFrameNumber()).toBe(2);
    });

    it("finishes game after the 10th frame", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frameScore = frame.getCurrentScore();

      for(i = 0; i < 10; i++) {game.updateTotalScore(frameScore)}
      expect(game.getFrameNumber()).toBe("Game over!");
    });
  });

  describe("checkLastFrame", function(){
    it ("shows the score of the previous frame", function () {
      frame1 = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame1.getCurrentScore.and.callFake(function() {return 8})
      frame1Score = frame1.getCurrentScore()
      game.updateTotalScore(frame1Score)

      frame2 = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame2.getCurrentScore.and.callFake(function() {return 6})
      frame2Score = frame2.getCurrentScore()

      expect(game.checkLastFrame(frame2Score)).toBe(8)
      game.updateTotalScore(frame2Score)
      expect(game.getTotalScore()).toBe(14)
    });

    it("adds the score of the current frame to the previous if it was a strike", function () {
      frame1 = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame1.getCurrentScore.and.callFake(function() {return 10})
      frame1Score = frame1.getCurrentScore()
      game.updateTotalScore(frame1Score)

      frame2 = jasmine.createSpyObj('frame', ['getCurrentScore'])
      frame2.getCurrentScore.and.callFake(function() {return 6})
      frame2Score = frame2.getCurrentScore()
      expect(game.checkLastFrame(frame2Score)).toBe(16)
      game.updateTotalScore(frame2Score)
      expect(game.getTotalScore()).toBe(22)
    });

  });

  describe("strikeOrSpare", function(){
    it("checks if the previous roll was a srike", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isStrike.and.callFake(function() {return true})
      frame.isSpare.and.callFake(function() {return false})
      console.log(frame.isStrike());
      expect(game.strikeOrSpare(frame)).toBe(true)
    });

    it("checks if the previous roll was a spare", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isSpare.and.callFake(function() {return true})
      frame.isStrike.and.callFake(function() {return false})
      expect(game.strikeOrSpare(frame)).toBe(true)
    });

    it("checks the previous roll was not a spare", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isSpare.and.callFake(function() {return false})
      frame.isStrike.and.callFake(function() {return false})
      expect(game.strikeOrSpare(frame)).toBe(false)
    });
  });
});
