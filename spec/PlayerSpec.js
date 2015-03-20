describe('Player', function(){

  var player 

  beforeEach(function() {
    player = new Player;
    player.newFrame();
  });

  it('should have 10 pins when newFrame is called', function(){
    expect(player.pinsLeftInFrame).toEqual(10);
  });

  it('the reduce pins function will reduce the number of pins by the roll value', function(){
    expect(player.reducePins(1)).toEqual(9);
  });

  it('can reduce the number of pins', function(){
    player.pinsLeftInFrame = 9
    pinsLeft = player.pinsLeftInFrame
    roll = player.roll();
    expect(player.pinsLeftInFrame).toEqual(pinsLeft-roll)
    expect(player.pinsLeftInFrame).toBeGreaterThan(-1);
  });

});