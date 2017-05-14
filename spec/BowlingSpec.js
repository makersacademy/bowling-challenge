describe('Bowling', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has an array storing results', function() {
    expect(bowling.getFrames()).toEqual([]);
  });


});
