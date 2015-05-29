describe('In the first frame, player bowls twice', function() {

  player = new Player

  it('and scores a 3 and a 2', function (){
    player.firstBowl(3);
    player.secondBowl(2);
    player.calculate();
    expect(player.score).toEqual(5);
  });
});