describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe "when a new game starts", function() {
    it("each game has 10 rounds", function() {
      expect(bowling.ROUNDS).toEqual(10);
    });

});

  // describe "one fram"
  // it("have a first roll", function() {
  //   var knocked_down = bowling.roll();
  //   expect(bowling.score).toEqual(knocked_down);
  //   expect(bowling.fram).toEqual(1);
  // });

  // it("have a second roll", function() {
  //   bowling.roll();
  //   bowling.roll();
  //   expect(bowling.fram).toEqual(2);
  // });


})
