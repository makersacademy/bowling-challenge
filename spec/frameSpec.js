describe('Frame', function(){

  var frame

  beforeEach( () => {
    frame = new Frame();
  });

  it('Make a new instance of Frame', function(){
    expect(frame instanceof Frame).toBeTruthy();
  });
})
