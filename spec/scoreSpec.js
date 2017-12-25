describe("Score", function(){
  var score;
  var nonSpareFrame;
  var spareFrame;
  var strikeFrame;

  beforeEach(function(){
    score = new Score();
    nonSpareFrame = {roll1: 4,
      roll2: 3,
      total: function(){return 7},
      isStrike: function(){return false},
      isSpare: function(){return false},
    };
    spareFrame = {roll1: 5, roll2: 5, total: function(){return 10}};
    strikeFrame = {roll1: 10, total: function(){return 10}};
  });

  it("Is initialized with no recorded frames", function(){
    expect(score.getFrames().length).toEqual(0);
  })

  it("Calculates total when all frames are not strikes or spares", function(){
    for(var i = 0; i < 10; i++){ score.addFrame(nonSpareFrame); };
    expect(score.getScore()).toEqual(70);
  })
})
