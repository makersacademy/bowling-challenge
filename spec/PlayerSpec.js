describe('Player', function(){

  var player 

  beforeEach(function() {
    player = new Player;
  });

  it('can have its pinsLeftInFrame property updated', function(){
    player.pinsLeftInFrame = 9
    expect(player.pinsLeftInFrame).toEqual(9)
  });

  it('can return the number of pins it knocks down in a roll', function(){
    spyOn(player, "roll").and.returnValue(1);
    expect(player.roll()).toEqual(1)
  });

});