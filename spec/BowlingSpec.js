describe ('bowling game', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with zero points', function(){
    expect(bowling.getScore()).toEqual(0);
  });

  it('stores the available pin', function(){
    expect(bowling.getPins()).toEqual(10);
  });

  it('stores all the rolls', function(){
    for (var i = 0; i < 21; i++){
    bowling.roll = function() { return 5; };
    bowling.updateRolls();
    }
    expect(bowling.addScore()).toEqual(150);
  });

  it('accurately calculates the spare', function(){
    for (var i = 0; i < 21; i++){
    bowling.roll = function() { return 5; };
    bowling.updateRolls();

  }
    expect(bowling.addScore()).toEqual(150);
  });




});
