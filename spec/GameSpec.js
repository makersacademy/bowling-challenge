describe ("Game", function() {

  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['score']);
  });

  it("starts without any frames", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("calculates total score", function() {
  });

  it("adds bonuses for a spare", function() {
  });

  it("adds bonuses for a strike", function() {
  });

  it("calculates consecutive strikes", function() {
  });


});