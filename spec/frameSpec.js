describe("Score of one roll", function(){
  beforeEach(function(){
        var frame = new Frame();
  })

  it("shows the score of one roll", function(){
    frame.firstRoll(5);
    expect(frame.firstRoll()).toEqual(5);
  });
})
