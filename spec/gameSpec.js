describe('Game class', function(){
  var game;
  var frame1;
  var frame2;
  var frame3;
  beforeEach(function(){
    game = new Game();
    frame1 = jasmine.createSpyObj('frame',['pointsFirstRoll', 'pointsSecondRoll']);
    frame2 = jasmine.createSpyObj('frame',['pointsFirstRoll', 'pointsSecondRoll']);
    frame3 = jasmine.createSpyObj('frame',['pointsFirstRoll', 'pointsSecondRoll']);
  });
  it('has an array that contains the game frames', function(){
    expect(game.gameFrames()).toEqual([]);
  })
});
