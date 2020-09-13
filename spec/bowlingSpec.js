describe("Bowling", function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  it("Should return total score when there is no strike or spare", function() {
    expect(bowling.firstTurn(4,5)).toBe(9);
  });

  it("Returns a strike score with bonus added ", function() {
    expect(bowling.firstTurn(10,0)).toBe(10);
    expect(bowling.nextTurn(2,3)).toBe(20);
  });
  it("Returns a spare score with bonus added", function() {
    expect(bowling.firstTurn(6,4)).toBe(10);
    expect(bowling.nextTurn(6,3)).toBe(25);
  });
  it("Returns a score for multiple strikes in a row", function() {
    expect(bowling.firstTurn(10,0)).toBe(10);
    expect(bowling.nextTurn(10,0)).toBe(30);
  });
});