describe("Bowling", function(){
  var bowling;

  beforeEach(function() {
    score = new Score;
    spyOn(score, "calculateChosen").and.returnValue(7);
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

  it("can roll a zero then a 10", function(){
    bowling.pinsHit(0);
    bowling.pinsHit(10);
    expect(bowling.frames[1]).toEqual([0,10]);
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

  it("raises error if score is calculated with half full frame", function() {
    bowling.pinsHit(8);
    expect(function(){bowling.calculateScore();}).toThrowError("Finish the frame");
  });

  it("raises error if first roll is over 10", function() {
    expect(function(){bowling.pinsHit(11);}).toThrowError("There are only 10 pins");
  });

  it("can call the score class and calculate the score", function() {
    bowling.pinsHit(5);
    bowling.pinsHit(2);
    expect(bowling.calculateScore()).toEqual(7);
  });

  it("can correct a strike frame", function(){
    bowling.pinsHit(10);
    expect(bowling.frames[1]).toEqual([10,0]);
  });

  it("raises error when the game is over", function() {
    bowling.currentFrame = 10;
    bowling.pinsHit(5);
    bowling.pinsHit(2);
    expect(function(){bowling.pinsHit(3);}).toThrowError("Game Over");
  });

  it("raises error when the game is over after strike in 10th round", function() {
    bowling.currentFrame = 10;
    bowling.pinsHit(10);
    bowling.pinsHit(2);
    bowling.pinsHit(5);
    expect(function(){bowling.pinsHit(3);}).toThrowError("Game Over");
  });

  it("raises error when the game is over after spare in 10th round", function() {
    bowling.currentFrame = 10;
    bowling.pinsHit(8);
    bowling.pinsHit(2);
    bowling.pinsHit(5);
    expect(function(){bowling.pinsHit(3);}).toThrowError("Game Over");
  });


});
