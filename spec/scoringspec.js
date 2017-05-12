describe('scoring', function(){

  it('starts with a score of 0', function(){
    score = new scoring()
    expect(score.score).toEqual(0)
  })

  it('can recieve an array from the game class', function(){
    game = new Game()
    game.play()
    expect(score.outcome(game.frames)).toBeTruthy()
  })

describe('individual frame scoring', function(){
  it('can check for strikes', function(){
    expect(score._isstrike(10,0)).toEqual(true)
    })

  it('can check for spares', function(){
    expect(score._isspare(0,10)).toEqual(true)
  })
  })

})
