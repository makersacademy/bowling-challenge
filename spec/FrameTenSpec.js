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
   

});