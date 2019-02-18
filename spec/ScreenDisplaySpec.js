describe("ScreenDisplay",function(){
  var scorecard;
  var screenDisplay;
  beforeEach(function(){
    screenDisplay = new ScreenDisplay;
  })
  it("can evaluate the scorecard for screen",function(){
    scorecard = [[1,5],[3,7],[8,2],[10],[5,3],[4]]
    expect(screenDisplay.show(scorecard)).toEqual(
      ["1","5","3","/","8","/","","X","5","3","4"]
    )
  })
})
