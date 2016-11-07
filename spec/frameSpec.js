describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("returns one game", function() {
    frame.oneGame(0);
    expect(frame.defaultPins()).toEqual(10);
  });

  it("throw an error if there are lore than 10 pins knocked down", function() {
    frame.oneGame(6);
    expect(function() {
      frame.oneGame(8);
    }).toThrow('You cannot knock down more than 10 pins');
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

  describe("When the game is over", function(){

    it("returns one game over", function(){
      frame.oneGame(3);
      frame.oneGame(7);
      expect(frame.isSpare()).toEqual(true);
    });

    it("returns the game is not over after rolling twice", function(){
      expect(frame.isGameOver()).toEqual(false);
    });

    it("returns the game is over when there is a strike",function(){
      frame.oneGame(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });

  it("returns the total score", function(){
    frame.oneGame(1);
    frame.oneGame(5);
    expect(frame.totalPinDown()).toEqual(6);
  });

});
