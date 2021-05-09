describe("Scorecard", ()=> {

  it('returns 0 when a gutter game is bowled',()=>{
    let guttergame = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    expect(Scorecard(guttergame)).toEqual(0)
  })

  it('returns 300 when a perfect game is bowled',()=>{
    let perfgame = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]]
    expect(Scorecard(perfgame)).toEqual(300)
  })

  it('returns 10 when player only hits 1 pin per frame',()=>{
    let game = [[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
    expect(Scorecard(game)).toEqual(10)
  })

  it('correctly adds a strike to score',()=>{
    let game = [[10,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
    expect(Scorecard(game)).toEqual(20)
  })

  it('correctly adds a spare to score',()=>{
    let game = [[1,0],[1,9],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
    expect(Scorecard(game)).toEqual(20)
  })

  it('correctly tallies two strikes',()=>{
    let game = [[10,0],[10,0],[1,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    expect(Scorecard(game)).toEqual(33)
  })

  it('correctly tallies three strikes',()=>{
    let game = [[10,0],[10,0],[10,0],[1,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    expect(Scorecard(game)).toEqual(63)
  })


})
