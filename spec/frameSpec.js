describe('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame(5,2);
  });

  it('initializes with a minimum score of 0', function() {
    expect(frame.MIN_SCORE).toEqual(0);
  });

  it('initializes with a maximum score of 10', function() {
    expect(frame.MAX_SCORE).toEqual(10);
  });

  it('takes the number of pins knocked down in the first roll from the user', function() {
    expect(frame.firstRoll).toEqual(5);
  });

  it('takes the number of pins knocked down in the second roll from the user', function() {
    expect(frame.secondRoll).toEqual(2);
  });



});
