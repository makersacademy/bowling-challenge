describe('Bowling', function(){
  
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has a zero score by default', function(){
    expect(bowling.score()).toEqual(0);
  });
});