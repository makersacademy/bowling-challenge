describe('Bowling game frame structure', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('each frame has two rolls each', function(){

    bowling.pinsHit(3);
    bowling.pinsHit(4);

    bowling.pinsHit(5);
    bowling.pinsHit(1);

    bowling.pinsHit(4);

    bowling._framer();

    expect(bowling.scoresFrame).toEqual([[3,4],[5,1],[4]]);

  })
})