describe("Bowling", function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe("Turns", function(){
    it("should record the result of a turn", function() {
      bowling.recordThrow(5);
      expect(bowling._turn).toEqual([5])
    });

    it("should record the action of a throw", function() {
      bowling.recordThrow(5);
      expect(bowling._turnThrows).toEqual(1)
    });

    it("should keep track of remaining pins for each turn", function() {
      bowling.recordThrow(5);
      expect(bowling._turnRemainingPins).toEqual(5)
    });

    it("should end if 10 pins are scored", function(){
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling._turn).toEqual([])
    });

    it("should end after 2 throws", function(){
      bowling.recordThrow(5);
      bowling.recordThrow(4);
      expect(bowling._turnLog[bowling._turnLog.length-1]).toEqual([5,4])
    });

    it("should end after a strike", function(){
      bowling.recordThrow(10);
      expect(bowling._turn).toEqual([])
    });
  });

  describe("Games", function () {
    it("should end after 10 turns", function () {
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
      bowling.recordThrow(10);
      //won't count towards current score until the second ball of this turn is thrown
      bowling.recordThrow(5);
      bowling.recordThrow(4);
      expect(bowling._turnLog[0].calculate()).toEqual(15)
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
      expect(bowling._turnLog[0].calculate()).toEqual(19)
    });
  });
});
