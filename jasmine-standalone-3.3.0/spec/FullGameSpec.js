describe("FullGame", function() {

  var fullgame;

  beforeEach(function(){
    fullgame = new FullGame();
  });

  function makeFrames(frame, frame10) {
    for(var i = 0; i < 9; i++) {
      fullgame.bowl(frame);
    }
    fullgame.bowl( frame10 || frame)
  }

  it("It is a gutter game, roll zero 20 times!", function() {
    makeFrames([0,0]);
    expect(fullgame.totalScore()).toEqual(0);
  });


});
