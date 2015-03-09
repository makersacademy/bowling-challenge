describe ('Frame', function(){

  var frame; 
  var player;

  beforeEach(function() {
    frame = new Frame;
    player = jasmine.createSpyObj('player', ['roll']);
  });

  it('has 10 pins on initialization', function(){
    expect(frame.pinsRemaining).toEqual(10)    
  });

  it('logs the score for both rolls as being 0 on initialization', function(){
    expect(frame.rollOneScore).toEqual(0);
    expect(frame.rollTwoScore).toEqual(0);
  });

  it('can reduce the number of pins when it receives a roll', function(){
    player.roll = 1
    frame.getRollOne(player.roll)
    expect(frame.pinsRemaining).toEqual(9)
  });

  it('knows when a strike has occurred', function(){
    frame.pinsRemaining = 10
    player.roll = 10
    frame.getRollOne(player.roll)
    expect(frame.isStrike).toEqual(true) 
  });  

  it('knows when a half strike has occurred', function(){
    frame.pinsRemaining = 5
    player.roll = 5
    frame.getRollTwo(player.roll)
    expect(frame.isHalfStrike).toEqual(true)   
  });

  it('knows what the score is for each roll', function(){
    frame.pinsRemaining = 10
    player.roll = 4
    frame.getRollOne(player.roll)
    expect(frame.rollOneScore).toEqual(4);
    player.roll = 6
    frame.getRollTwo(player.roll)
    expect(frame.rollTwoScore).toEqual(6);
    expect(frame.isHalfStrike).toEqual(true);
    expect(frame.isStrike).toEqual(false);
  });
      
});
