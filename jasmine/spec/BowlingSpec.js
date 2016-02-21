describe("Bowling", function(){
  var bowling;
  beforeEach(function() {
    bowling = new Bowling;
  });

  it("can receive the number of pins knocked down", function(){
    bowling.pinsHit(5);
    expect(bowling.frame).toEqual([5]);
  })

  it("can receive two scores that make up a single frame", function(){
    bowling.pinsHit(5);
    bowling.pinsHit(3);
    expect(bowling.score).toEqual(8);
  });
});
