describe("Score", function(){
  var score;
  var nonSpareFrame;

  beforeEach(function(){
    score = new Score();
    nonSpareFrame = {roll1: 4, roll2: 3, total: function(){return 7}};
  });

  it("Is initialized with no recorded frames", function(){
    expect(score.getFrames().length).toEqual(0);
  })

  it("Calculates total when all frames are not strikes or spares", function(){
    for(var i = 0; i < 10; i++){ score.addFrame(nonSpareFrame); };
    expect(score.getScore()).toEqual(70);
  })
})
