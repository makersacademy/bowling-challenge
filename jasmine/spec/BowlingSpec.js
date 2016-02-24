describe("Bowling", function(){
  var bowling;

  beforeEach(function() {
    score = new Score;
    spyOn(score, "calculate").and.returnValue(7);
    bowling = new Bowling(score);
  });

  it("can create a frame which the pins are added", function(){
    bowling.createFrame();
    expect(bowling.frames[1]).toEqual([])
  });

  it("can receive the number of pins knocked down", function(){
    bowling.pinsHit(5);
    expect(bowling.frames[1]).toEqual([5]);
  })

  it("can receive the second number of pins knocked down to complete a frame", function(){
    bowling.pinsHit(5);
    bowling.pinsHit(2);
    expect(bowling.frames[1]).toEqual([5,2]);
  })

  it("can recognise if a frame is full of hit pins", function(){
    bowling.frames[1] = [5,2];
    expect(bowling.isFrameFull()).toBe(true);
  });

  it("can accertain if pins are above 10", function() {
    bowling.pinsHit(5);
    expect(bowling.isOverTen(7)).toBe(true);
  });

  it("raises error if second roll sums pins to over 10", function() {
    bowling.pinsHit(5);
    expect(function(){bowling.pinsHit(7);}).toThrowError("There are only 10 pins");
  });

  it("can call the score class and calculate the score", function() {
    bowling.pinsHit(5);
    bowling.pinsHit(2);
    expect(bowling.calculateScore()).toEqual(7);
  });


});
