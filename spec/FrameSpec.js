describe('Frame', () => {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });


  it('.isSpare() should return true if the rolls are 5 and 5 (total 10)', () => {
    frame.roll1 = 5
    frame.roll2 = 5
    expect(frame.isSpare()).toEqual(true);
  });

  it('.isSpare() should return false if the rolls are 1 and 1 (total 2)', () => {
    frame.roll1 = 1
    frame.roll2 = 1
    expect(frame.isSpare()).toEqual(false);
  });
  
});