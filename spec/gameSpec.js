

describe('Game',function(){
 
  let game
  
  beforeEach(function () {
    game = new Game()
  })

  it('can roll gutter', function() {
    rollMany(0, 20)
    expect(game.score()).toBe(0);
  })



  it('can rolls one', function() {
    rollMany(1, 20)
    expect(game.score()).toBe(20)
  })


  it('can rolls a spare', function() {
    game.roll(3)
    game.roll(7)
    game.roll(2)
    rollMany(0, 17);
    expect(game.score()).toBe(14);
  })


  it('can roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0,16)
    expect(game.score()).toBe(24)
  })

  it('can be a perfect game', function(){
    rollMany(10, 12);
    expect(game.score()).toBe(300)
  })


  let rollMany = function(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
  }
})

