describe('game', function(){

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  it('starts with an empty array', function(){
    expect(game.frames).toEqual([])
  });

  it('saves frame outcomes', function(){
    spyOn(frame, 'outcome').and.returnValue([5,5])
    game.advance()
    expect(game.frames).toContain([5,5])
  })

  it('advances frames 10 times', function(){
    game.play()
    expect(game.frames.length).toBe(10)
  })
})
