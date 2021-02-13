describe('Game', function() {
  let game, frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('Frame',['frame_Score', 'AddRoll1'])
  })

  it('updates the current frame', function() {
    frame.AddRoll1(3)
    expect(game.UpdateCurrentFrame()).toEqual(3)
  })
});
