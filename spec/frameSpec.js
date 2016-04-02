describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });


  it('should save the score of ball1', function() {
    frame.b1(5)
    expect(frame.first).toEqual(5)
  })

  it('should save the score f ball2', function() {
    frame.b2(3)
    expect(frame.second).toEqual(3)
  })

  it('should know a strike', function() {
    frame.b1(10)
    expect(frame.strike).toEqual(true)
  })

  it('should know a spare', function() {
    frame.b1(4)
    frame.b2(6)
    expect(frame.spare).toEqual(true)
  })

  it('know the score of the frame', function(){
    frame.b1(4)
    frame.b2(4)
    expect(frame.score()).toEqual(8)
  })
})
