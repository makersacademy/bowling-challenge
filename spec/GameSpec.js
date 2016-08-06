describe("Frame", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('sets default frame to 1', function(){
    expect(game.frame).toEqual(1);
  });

  it('sets default knockedPins to 0', function(){
    expect(game.totalScore).toEqual(0);
  });



});
