describe("Score", function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Creates an array with a strike", function() {
    game.bowl(10);
    expect(game.scores).toEqual([[10]])
  });

  it("When 2 strikes in a row, adds 10 to the first score", function(){
    game.bowl(10);
    game.bowl(10);
    expect(game.scores).toEqual([[10,10], [10]])
  });

  it("When 2 strikes in a row, the total score should be 30", function(){
    game.bowl(10);
    game.bowl(10);
    game._countScore();
    expect(game.totalScore).toEqual(30)
  });
  it("When 3 strikes in a row, adds 10 to the second score aswell", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    expect(game.scores).toEqual([[10,10,10],[10,10], [10]])
  });
  it("When 3 strikes in a row, the total score should be 60", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game._countScore();
    expect(game.totalScore).toEqual(60)
  });
  it("When 4 strike in a row", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    expect(game.scores).toEqual([[10,10,10],[10,10,10],[10,10],[10]])
  })
  it("When 4 strikes in a row, the total score should be 90", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game._countScore();
    expect(game.totalScore).toEqual(90)
  });
  it("Strike then scores 2 & 3 should equal 20", function(){
    game.bowl(10);
    game.bowl(2);
    game.bowl(3);
    game._countScore();
    expect(game.totalScore).toEqual(20)
  })
  it("2 Strikes then 4 & 3 should equal 48", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(4);
    game.bowl(3);
    game._countScore();
    expect(game.totalScore).toEqual(48)
  })
  it("2 bowls of score 3 & 3 should equal 6", function(){
    game.bowl(3);
    game.bowl(3);
    game._countScore();
    expect(game.totalScore).toEqual(6)
  })
  it("Can score a perfect game of 300", function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game._countScore();
    expect(game.totalScore).toEqual(300)
  })

});
