describe('In the first frame, player bowls twice', function() {

  player = new Player

  it('and scores a 3 and a 2', function (){
    player.firstBowl(3);
    player.secondBowl(2);
    player.calculate();
    expect(player.score).toEqual(5);
  });

  it('and scores a 7 and a 1', function (){
    player.firstBowl(7);
    player.secondBowl(1);
    player.calculate();
    expect(player.score).toEqual(8);
  });

  it('and scores a spare', function () {
    player.firstBowl(9);
    player.secondBowl(1);
    player.calculate();
    expect(player.score).toEqual(10);
  })

  it('but cannot hit more than 10 pins in one bowl', function() {
    expect( function(){ player.firstBowl(11); } ).toThrow(new Error("Cannot hit more than 10 pins"));
  });

  it('but cannot hit more than 10 pins over two bowls', function() {
    player.firstBowl(3);
    expect( function() { player.secondBowl(8); } ).toThrow(new Error("Cannot hit more than 10 pins"));
  });

  it('but cannot bowl twice if a strike is scored', function() {
    player.firstBowl(10);
    expect( function() { player.secondBowl(1); } ).toThrow(new Error("Cannot bowl twice on a strike"));
  });
});