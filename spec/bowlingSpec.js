describe("Bowling", function() {

    beforeEach(function() {
      bowling = new Bowling();
    });

    it("a new game returns a default score of 0.", function() {
      let currentFrameScore = [];
      expect(bowling.scoring(currentFrameScore)).toEqual(0);
    });

    it("a new game starts at frame 1.", function() {
      expect(bowling.currentFrame()).toEqual(1);
    });

    it("updates the score at the end of a normal frame.", function() {
      bowling.scoring([2,1]);
      expect(bowling.score).toEqual(3);
    });

    it("stores the score for each frame played during a game.", function() {
      bowling.scoring([2,1]);
      bowling.scoring([5,1]);
      bowling.scoring([0,10]);
      expect(bowling.scoreCard[0]).toEqual([2,1]);
      expect(bowling.scoreCard[1]).toEqual([5,1]);
      expect(bowling.scoreCard[2]).toEqual([0,10]);
    });

    it("doesn't accept a frame score higher than 10.", function() {
      expect(bowling.scoring([8,10])).toEqual("invalid score")
      expect(bowling.currentFrame()).toEqual(1);
      expect(bowling.scoreCard[0]).toBe(undefined);
    });

    it("at the end of a frame the frame number increases by 1.", function() {
      let currentFrameScore = [2,1];
      bowling.scoring(currentFrameScore);
      expect(bowling.currentFrame()).toEqual(2);
    });

    it("a normal game has a maximum of 10 frames.", function() {
      for (let i = 0; i < 15; i++) {
        let currentFrameScore = [2,1];
        bowling.scoring(currentFrameScore);
      }
      expect(bowling.currentFrame()).toEqual(10);
    });

    it("knows how to calculate the score after a normal frame.", function() {
      bowling.scoring([3,0]);
      bowling.scoring([2,1]);
      expect(bowling.score).toEqual(6);
    });

    it("know's that a strike has been scored.", function() {
      expect(bowling.scoring([10,0])).toEqual("X")
    });

    it("remembers that a strike has been scored.", function() {
      bowling.scoring([10,0]);
      expect(bowling.previousFrameHad).toEqual("aStrike");
    });

    it("knows how to calculate the score after a strike.", function() {
      bowling.scoring([10,0]);
      bowling.scoring([2,1]);
      expect(bowling.score).toEqual(16);
    });

    it("knows how to calculate the score after a double strike.", function() {
      bowling.scoring([10,0]);
      bowling.scoring([10,0]);
      bowling.scoring([3,4]);
      expect(bowling.score).toEqual(47);
    });

    it("knows how to calculate the score after a triple 'turkey' strike.", function() {
      for (let i = 0; i < 3; i++) {
        bowling.scoring([10,0]);
      }
      bowling.scoring([3,4]);
      expect(bowling.score).toEqual(77);
    });

    it("knows how to calculate the score after several strikes.", function() {
      for (let i = 0; i < 6; i++) {
        bowling.scoring([10,0]);
      }
      bowling.scoring([3,4]);
      expect(bowling.score).toEqual(167);
    });

    it("know's that a spare has been scored.", function() {
      expect(bowling.scoring([5,5])).toEqual("/")
    });

    it("remembers that a spare has been scored.", function() {
      bowling.scoring([4,6]);
      expect(bowling.previousFrameHad).toEqual("aSpare");
    });

    it("knows how to calculate the score after a spare.", function() {
      bowling.scoring([5,5]);
      bowling.scoring([2,1]);
      expect(bowling.score).toEqual(15);
    });

});
