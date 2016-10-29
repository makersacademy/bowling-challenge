describe("Bowling", function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe("Turns", function(){
    it("should record the result of a throw", function() {
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

    it("should end the current turn if 10 pins are scored", function(){
      bowling.recordThrow(5);
      bowling.recordThrow(5);
      expect(bowling.calculateTurn()).toEqual(0)
    });

    it("two throws should cause the end of a turn", function(){
      bowling.recordThrow(5);
      bowling.recordThrow(4);
      expect(bowling._turnLog[bowling._turnLog.length-1]).toEqual([5,4])
    });
  });
});
