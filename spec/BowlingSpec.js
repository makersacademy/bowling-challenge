describe("Bowling", function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe("Games", function () {
    it("should keep track of remaining pins for each turn", function() {
      bowling.recordThrow(5);
      expect(bowling._turnRemainingPins).toEqual(5)
    });

    it("should end after 10 turns in normal case", function () {
      for (i = 1; i <= 10; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      expect(bowling.isGameOver()).toBe(true)
    });

    it("should return a running total", function() {
      bowling.recordThrow(5); bowling.recordThrow(4);
      expect(bowling.calculateTotalScore()).toEqual(9)
      bowling.recordThrow(1); bowling.recordThrow(8);
      expect(bowling.calculateTotalScore()).toEqual(18)
    });
  });

  describe("Spares", function () {
    it("should record the next throw in the previous turn's score too", function() {
      bowling.recordThrow(9);
      bowling.recordThrow(1);
      //won't count towards current score until the second ball of this turn is thrown
      bowling.recordThrow(5);
      expect(bowling.calculateTotalScore()).toEqual(15)
    });
    it("should not record the second throw after the spare in the previous turn's score too", function() {
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      bowling.recordThrow(3);
      //Expecting the below throw to not score
      bowling.recordThrow(3);
      expect(bowling._turnLog[0].totalScore()).toEqual(13)
    });
  });

  describe("Strikes", function () {
    it("should record the next throw in the previous turn's score too", function() {
      bowling.recordThrow(10);
      //won't count towards current score until the second ball of this turn is thrown
      bowling.recordThrow(5);
      expect(bowling.calculateTotalScore()).toEqual(15)
    });
    it("should record the second throw after the strike in the previous turn's score too", function() {
      bowling.recordThrow(10);
      //won't count towards current score until the second ball of this turn is thrown
      bowling.recordThrow(5);
      bowling.recordThrow(4);
      expect(bowling._turnLog[0].totalScore()).toEqual(19)
    });
  });

  describe("Edge cases", function () {
    it("should not be game over if the last turn was a spare", function() {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.isGameOver()).toBe(false)
    })

    it("should be game over if the last turn was a spare and additional ball was thrown", function() {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.isNormalPlayOver()).toBe(true)
      expect(bowling.isGameOver()).toBe(false)
      bowling.recordThrow(5);
      expect(bowling.isGameOver()).toBe(true)
    })

    it("should record 1 more throw after a spare on the final turn", function () {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.calculateTotalScore()).toEqual(96)
    })

    it("should not record 2 more throws after a spare on the final turn", function () {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.calculateTotalScore()).toEqual(96)
    })

    it("should record 2 more throws after a strike on the final turn", function () {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(10);
      bowling.recordThrow(4);
      bowling.recordThrow(4);
      expect(bowling.calculateTotalScore()).toEqual(99)
    })

    it("should  not record 3 more throws after a strike on the final turn", function () {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(10);
      bowling.recordThrow(4);
      bowling.recordThrow(4);
      bowling.recordThrow(4);
      expect(bowling.calculateTotalScore()).toEqual(99)
    })

    it("should be not game over if the last turn was a strike", function() {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(10);
      expect(bowling.isNormalPlayOver()).toBe(true)
      expect(bowling.isGameOver()).toBe(false)
    })

    it("should be game over if the last turn was a spare and additional ball was thrown", function() {
      for (i = 1; i <= 9; i++){
        bowling.recordThrow(5); bowling.recordThrow(4);
      }
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.isNormalPlayOver()).toBe(true)
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.isGameOver()).toBe(true)
    })
  })
});
