describe("Frame", function() {
  beforeEach(function() {
    frame  = new Frame();
  });

  it("should calculate frame", function(){
    expect(game.calculateFrame([2,4])).toEqual(6)
  });

  it("should return 10 if the first roll is a Strike", function(){
    expect(game.calculateFrame([10, 7])).toEqual(10)
  });

});
