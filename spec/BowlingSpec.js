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

  it('can increment frame', function(){
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.frame()).toBe(2);
  });

  it('can increment frame on a strike', function(){
    bowling.roll(10);
    expect(bowling.frame()).toBe(2);
  });

});
