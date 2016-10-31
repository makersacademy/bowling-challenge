describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("returns one game", function() {
    frame.oneGame(0);
    expect(frame.defaultPins()).toEqual(10);
  });

  it("returns one successful roll", function() {
    frame.oneGame(5);
    expect(frame.defaultPins()).toEqual(5);
  });

  it("returns twice rolls", function(){
    frame.oneGame(3);
    frame.oneGame(5);
    expect(frame.defaultPins()).toEqual(2);
  });

  it("returns game over", function(){
    frame.oneGame(3);
    frame.oneGame(7);
    expect(frame.isGameOver()).toEqual(true);
  });

  it("returns the game is not over after rolling twice", function(){
    expect(frame.isGameOver()).toEqual(false);
  });

});
