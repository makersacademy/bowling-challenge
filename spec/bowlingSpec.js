describe("Bowling", function(){

  beforeEach( function () {
     bowling = new Bowling();
  });

  it('can set a new game', function(){
    expect(bowling.hit).not.toBe(null);
  });

  it('can assign point to the score', function() {
    bowling.roll(4, 5);
    expect(bowling.hit[0]).toEqual(9);
    });

  it('can assign strike', function(){
    bowling.roll(10);
    expect(bowling.hit[0]).toEqual('strike');
  }),

  it('can assign spare', function(){
    bowling.roll(4, 6);
    expect(bowling.hit[0]).toEqual('spare');
  });

describe("game", function(){

  it('can get the perfect score', function(){
    expect(bowling.game).toEqual('perfect score')
  })
});

describe("points", function(){
  it('with spare can double the next first roll point', function () {
    bowling.points;
    expect(bowling.score[0]).toEqual(bowling.hit[0])
  })
})

  it



});
