describe('Game', function () {
  var game;

  beforeEach(function (){
    game = new Game();
  })

  var rollMany = function (n,pins){
    for(var i = 0; i<n; i++) {
      game.roll(pins);
    }
  };

  it('is defined', function() {
    expect(game).toBeDefined();
  })

  it('is a Gutter Game', function () {
    rollMany(20,0);
    expect(game.score()).toEqual(0);
  })

  it('rolls all ones', function () {
    rollMany(20,1);
    expect(game.score()).toEqual(20);
  })

  it('rolls one spare', function (){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17,0);
    expect(game.score()).toEqual(16);
  })

  it('rolls one strike', function (){
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16,0);
    expect(game.score()).toEqual(24);
  })

  it('plays a Perfect Game', function (){
    rollMany(12,10);
    expect(game.score()).toEqual(300);
  })
});
