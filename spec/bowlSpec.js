describe('Bowl', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('can only roll a maximum of twenty times', function(){

    for(i=0; i<20; i++){

      bowling.pinsHit(3);

    }

    expect(bowling.pinsHit(3)).toEqual("You have exceeded max number of rolls");

  })

  it('the sum of both rolls in a frame is less than ten', function(){

    bowling.pinsHit(5);

    expect(bowling.pinsHit(6)).toEqual("invalid");

  })
})