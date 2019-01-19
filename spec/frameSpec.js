describe('Frame', function(){

  beforeEach( () => {
    frame1 = new Frame();
  });

  it('Make a new instance of Bike', function(){
    expect(frame1 instanceof Frame).toBeTruthy();
  });
})
