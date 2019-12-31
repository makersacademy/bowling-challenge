

describe('Game',function(){
 
  let game
  
  beforeEach(function () {
    game = new Game()
  })

  it('Can roll gutter', function() {
    rollMany(0, 20)
    expect(game.score()).toBe(0);
  })



  it('can rolls one', function() {
    rollMany(1, 20)
    expect(game.score()).toBe(20)
  })




  let rollMany = function(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
  }
})

