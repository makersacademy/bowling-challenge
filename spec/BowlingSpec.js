describe('Bowling scoresheet', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling
  });

  it('can retain the score from a roll', function(){
    bowling.roll(5);
    expect(bowling.score()).toBe(5);
  });

  it('rejects an illegal score', function(){
    expect(function(){bowling.roll(11)}).toThrow('Illegal score');
  });

});
