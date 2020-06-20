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
  });
  it('includes multiple frames in the gameFrames array', function(){
    game.addFrame(frame1);
    game.addFrame(frame2);
    game.addFrame(frame3);
    expect(game.gameFrames()).toEqual([frame1, frame2, frame3]);
  });
  it('does not allow to add more than 10 frames', function(){
    for(var i=0; i<11; i++) {
      game.addFrame(frame1);
    }
    expect(game.gameFrames().length).toEqual(10);
  });

});
