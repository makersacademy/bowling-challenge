describe('Frames', function() {

  var frames;

  beforeEach(function(){
    frames = new Frames();
  });

  it('stores frames from current game', function() {
    expect(frames._frames).toEqual([]);
  });
});
