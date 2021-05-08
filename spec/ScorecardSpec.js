describe("Scorecard", ()=> {

  it('returns 0 when a gutter game is bowled',()=>{
    let guttergame = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    expect(Scorecard(guttergame)).toEqual(0)
  })
})
