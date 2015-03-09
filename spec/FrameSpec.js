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

  it('can return an error if the second roll is higher than the number of pins remaining', function(){
    frame.pinsRemaining = 5
    player.roll = 6
    expect(frame.getRollTwo(player.roll)).toEqual("error");
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

  
      
});
