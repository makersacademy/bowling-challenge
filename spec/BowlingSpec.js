describe('Bowling scoresheet', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling
  });

  it('can retain the score from a single roll', function(){
    bowling.roll(5);
    expect(bowling.score()).toBe(5);
  });

  it('rejects an illegal score', function(){
    expect(function(){bowling.roll(11)}).toThrow('Illegal score');
  });

  it('can know it has incremented frame', function(){
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.frame()).toBe(2);
  });

});
