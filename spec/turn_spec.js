describe("Turn", function() {
  var gutterturn;
  var turnofones;
  var normalturn;
  var anotherturn;
  var spareturn;
  var striketurn;

  beforeEach(function(){
    gutterturn = new Turn(0, 0);
    turnofones = new Turn(1, 1);
    normalturn = new Turn(2, 5);
    anotherturn = new Turn(4, 2);
    spareturn = new Turn(7, 3);
    striketurn = new Turn(10);
  });

  it("returns first bowl as integer 0-10", function() {
    expect(turnofones.firstBowl).toEqual(1);
  });

  it("returns second bowl as integer 0-10", function() {
    expect(spareturn.secondBowl).toEqual(3);
  });

  it("returns second bowl of strike as 0", function() {
    expect(striketurn.secondBowl).toEqual(0);
  });

});
