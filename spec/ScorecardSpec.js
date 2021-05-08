describe("Scorecard", ()=> {

  // it('returns 0 when a gutter game is bowled',()=>{
  //   let guttergame = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  //   expect(Scorecard(guttergame)).toEqual(0)
  // })

  // it('returns 10 when player only hits 1 pin per frame',()=>{
  //   let game = [[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
  //   expect(Scorecard(game)).toEqual(10)
  // })

  it('recognises a strike',()=>{
    let game = [[10,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
    expect(Scorecard(game)).toEqual(20)
  })

  it('recognises a spare',()=>{
    let game = [[1,0],[1,9],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]
    expect(Scorecard(game)).toEqual(20)
  })
})
