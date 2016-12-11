describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should respond to rolls', function() {
    expect('_rolls' in frame).toEqual(true);
  });

  it('should respond to roll', function() {
    expect('roll' in frame).toEqual(true);
  });

  it('rolls should reduce by 1 when roll is called', function() {
    frame.roll()
    expect(frame._rolls).toEqual(1);
  })

it('should have a default value of 10 pins', function(){
  expect(frame._pins).toEqual(10);
})

it('should keep the score', function() {
  expect('score' in frame).toEqual(true);
})

it('rolls cannot continue beyond 0', function() {
  frame.roll()
  frame.roll()
  frame.roll()
  expect(frame._rolls).toEqual(0);
})

});
