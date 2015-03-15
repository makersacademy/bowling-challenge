describe ('FrameTen', function(){

  var frame; 
  var player;

  beforeEach(function() {
    frame = new FrameTen;
    player = jasmine.createSpyObj('player', ['roll']);
  });

  it('has 10 pins on initialization', function(){
    expect(frame.pinsRemaining).toEqual(10)    
  });

  it('if roll one is a strike the roll one score is 10', function(){
    player.roll = 10
    frame.getRollOne(player.roll)
    expect(frame.rollOneScore).toEqual(10)
  });
   
  it('if roll one is not a strike, it knows that it will have to add up the roll score', function(){
    player.roll = 5
    frame.getRollOne(player.roll)
    expect(frame.rollOneScore).toEqual(5)
  }); 

  it('if knows that if roll one was not a strike, then the pins remaining should be less than the roll', function(){
    player.roll = 5
    frame.getRollOne(player.roll)
    expect(frame.pinsRemaining).toEqual(5)
  });

});