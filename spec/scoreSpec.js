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
      getRoll: function(i){return 4},
    };
    spareFrame = {roll1: 5, roll2: 5, total: function(){return 10}};
    strikeFrame = {roll1: 10,
      total: function(){return 10},
      isStrike: function(){return true},
      isSpare: function(){return false},
    };
  });

  it("Is initialized with no recorded frames", function(){
    expect(score.getFrames().length).toEqual(0);
  })

  it("Calculates total when all frames are not strikes or spares", function(){
    for(var i = 0; i < 10; i++){ score.addFrame(nonSpareFrame); };
    expect(score.getScore()).toEqual(70);
  })

  it("Calculates strikebonus as 20 when 3 strikes in a row", function(){
    for(var i = 0; i < 3; i++){ score.addFrame(strikeFrame); };
    expect(score.getStrikeBonus(0)).toEqual(20);
  });

  it("Calculates strikebonus as 14 when 2 strikes and a 4-3", function(){
    for(var i = 0; i < 2; i++){ score.addFrame(strikeFrame); };
    score.addFrame(nonSpareFrame)
    expect(score.getStrikeBonus(0)).toEqual(14);
  });

  it("Calculates strikebonus as 7 when 1 strike and a 4-3", function(){
    score.addFrame(strikeFrame);
    score.addFrame(nonSpareFrame)
    expect(score.getStrikeBonus(0)).toEqual(7);
  });
})
