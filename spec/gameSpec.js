describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("getTotalScore", function() {
    it("returns the current score", function () {
      frame = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frame.isStrike.and.callFake(function() {return false})
      frame.isSpare.and.callFake(function() {return false})

      game.updateTotalScore(frame);
      expect(game.getTotalScore()).toBe(6);
    });
  });

  describe("frameNumber", function() {
    it("starts at one", function() {
      expect(game.getFrameNumber()).toBe(1)
    });

    it("tracks the frame number that the user is on", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frame.isStrike.and.callFake(function() {return false})
      frame.isSpare.and.callFake(function() {return false})

      game.updateTotalScore(frame)
      expect(game.getFrameNumber()).toBe(2);
    });

    it("finishes game after the 10th frame", function(){
      frame = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame.getCurrentScore.and.callFake(function() {return 6})
      frame.isStrike.and.callFake(function() {return false})
      frame.isSpare.and.callFake(function() {return false})

      for(i = 0; i < 10; i++) {game.updateTotalScore(frame)}
      expect(game.getFrameNumber()).toBe("Game over!");
    });
  });

  describe("checkLastFrame", function(){
    it ("shows the score of the previous frame", function () {
      frame = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame.getCurrentScore.and.callFake(function() {return 8})
      frame.isStrike.and.callFake(function() {return false})
      frame.isSpare.and.callFake(function() {return false})
      game.updateTotalScore(frame)

      frame2 = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame2.getCurrentScore.and.callFake(function() {return 6})
      frame2.isStrike.and.callFake(function() {return false})
      frame2.isSpare.and.callFake(function() {return false})

      expect(game.checkLastFrame(frame2)).toBe(8)
      game.updateTotalScore(frame2)
      expect(game.getTotalScore()).toBe(14)
    });

    it("adds the score of the current frame to the previous if it was a strike", function () {
      frame1 = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame1.getCurrentScore.and.callFake(function() {return 10})
      frame1.isStrike.and.callFake(function() {return true})
      frame1.isSpare.and.callFake(function() {return false})
      game.updateTotalScore(frame1)

      frame2 = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame2.getCurrentScore.and.callFake(function() {return 6})
      frame2.isStrike.and.callFake(function() {return false})
      frame2.isSpare.and.callFake(function() {return false})
      game.updateTotalScore(frame2)
      expect(game.getTotalScore()).toBe(22)
    });

    it("adds the first roll of the next frame to previous if it was a spare", function () {
      frame1 = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare'])
      frame1.getCurrentScore.and.callFake(function() {return 10})
      frame1.isStrike.and.callFake(function() {return false})
      frame1.isSpare.and.callFake(function() {return true})
      game.updateTotalScore(frame1)

      frame2 = jasmine.createSpyObj('frame', ['getCurrentScore', 'isStrike', 'isSpare', ])
      frame2.getCurrentScore.and.callFake(function() {return 6})
      frame2.isStrike.and.callFake(function() {return false})
      frame2.isSpare.and.callFake(function() {return false})
      roll1 = 3
      game.updateTotalScore(frame2, roll1)
      expect(game.getTotalScore()).toBe(19)
    });
  });

  describe("strikeOrSpare", function(){
    it("checks if the previous roll was a srike", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isStrike.and.callFake(function() {return true})
      frame.isSpare.and.callFake(function() {return false})
      expect(game.strikeOrSpare(frame)).toBe('Strike')
    });

    it("checks if the previous roll was a spare", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isSpare.and.callFake(function() {return true})
      frame.isStrike.and.callFake(function() {return false})
      expect(game.strikeOrSpare(frame)).toBe('Spare')
    });

    it("checks the previous roll was not a spare", function(){
      frame = jasmine.createSpyObj('frame', ['isStrike', 'isSpare'])
      frame.isSpare.and.callFake(function() {return false})
      frame.isStrike.and.callFake(function() {return false})
      expect(game.strikeOrSpare(frame)).toBe(false)
    });
  });
});
