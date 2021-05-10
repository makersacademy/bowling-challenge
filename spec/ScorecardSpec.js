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

  it('correctly calcs some random games',()=>{
    let a = [[10,0],[10,0],[1,0],[10,0],[10,0],[10,0],[1,0],[10,0],[10,0],[10,0,1]]
    let b = [[3,1],[6,4],[8,2],[2,2],[3,3],[10,0],[7,2],[4,0],[9,1],[4,6,7]]
    let c = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[3,3],[3,3],[3,3],[3,3]]
    let d = [[10,0],[9,1],[10,0],[9,0],[10,0],[9,1],[10,0],[10,0],[9,0],[10,8,2]]
    let e = [[10,0],[6,4],[10,0],[10,0],[10,0],[6,4],[10,0],[10,0],[1,9],[10,8,0]]
    let f = [[4,1],[9,1],[8,2],[7,3],[6,3],[5,4],[4,3],[3,2],[2,1],[0,7]]

    expect(Scorecard(a)).toEqual(157)
    expect(Scorecard(b)).toEqual(107)
    expect(Scorecard(c)).toEqual(36)
    expect(Scorecard(d)).toEqual(185)
    expect(Scorecard(e)).toEqual(215)
    expect(Scorecard(f)).toEqual(96)
  })
})
