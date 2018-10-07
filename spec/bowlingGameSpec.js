describe('bowlingGame',function() {
  var bowling;

  beforeEach(function(){
    bowling = new BowlingGame('aidan');
  })

  it('should have a player name',function(){
    expect(bowling.playerName).toEqual('aidan')
  })

})
