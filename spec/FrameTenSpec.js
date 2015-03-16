describe ('FrameTen', function(){

  var frame; 
  var player;

  beforeEach(function() {
    frame = new FrameTen;
    player = new Player
    player.newFrame()
  });

  it('has 10 pins on initialization', function(){
    expect(frame.pinsRemaining).toEqual(10)    
  });

  it('if roll one is a strike the roll one score is 10', function(){
    spyOn(player, "roll").and.returnValue(10);
    roll = player.roll()
    frame.getRollOne(roll, player)
    expect(frame.rollOneScore).toEqual(10)
  });
   
  it('if roll one is not a strike, it knows that it will have to add up the roll score', function(){
    spyOn(player, "roll").and.returnValue(5);
    roll = player.roll()
    frame.getRollOne(roll, player)
    expect(frame.rollOneScore).toEqual(5)
  }); 

  it('knows that if roll one was not a strike, then the pins remaining should be less than the roll', function(){
    spyOn(player, "roll").and.returnValue(5);
    roll = player.roll()
    frame.getRollOne(roll, player)
    expect(frame.pinsRemaining).toEqual(5)
  });

  it('knows that if roll one was not a strike, then it has to add up roll two scores', function(){
    spyOn(player, "roll").and.returnValue(5);
    roll = player.roll()
    frame.getRollOne(roll, player);
    frame.getRollTwo(roll, player);
    expect(frame.rollOneScore).toEqual(5)
    expect(frame.rollTwoScore).toEqual(5)
  });

  it('knows that if there was a strike on roll two, that roll three can commence', function(){
    spyOn(player, "roll").and.returnValue(10);
    roll = player.roll()
    frame.getRollOne(roll, player);
    frame.getRollTwo(roll, player);
    expect(frame.isRollThree()).toEqual(true);  
  });

  it('knows that if there was a spare on roll two, that roll three can commence', function(){
    spyOn(player, "roll").and.returnValue(5);
    roll = player.roll()
    frame.getRollOne(roll, player);
    frame.getRollTwo(roll, player);
    expect(frame.isRollThree()).toEqual(true);  
  });

  it('knows that if there was NOT a spare on roll two, that roll three cannot commence', function(){
    spyOn(player, "roll").and.returnValue(3);
    roll = player.roll();
    frame.getRollOne(roll, player);
    frame.getRollTwo(roll, player);
    expect(frame.isRollThree()).toEqual(false);  
  });

  it('can correctly score rolls', function(){
    frame.getRollOne(3,player)
    frame.getRollTwo(3,player)
    frame.getRollThree(3)
    expect(frame.rollOneScore).toEqual(3)
    expect(frame.rollTwoScore).toEqual(3)
    expect(frame.rollThreeScore).toEqual(0)
  });

  it('can correctly score rolls', function(){
    frame.getRollOne(10,player)
    frame.getRollTwo(10,player)
    frame.getRollThree(10)
    expect(frame.rollOneScore).toEqual(10)
    expect(frame.rollTwoScore).toEqual(10)
    expect(frame.rollThreeScore).toEqual(10)
  });


  it('can correctly score rolls', function(){
    frame.getRollOne(5,player)
    frame.getRollTwo(5,player)
    frame.getRollThree(10)
    expect(frame.rollOneScore).toEqual(5)
    expect(frame.rollTwoScore).toEqual(5)
    expect(frame.rollThreeScore).toEqual(10)
  });


});