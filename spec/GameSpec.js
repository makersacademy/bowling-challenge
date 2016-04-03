describe("Game", function() {

  var game;
  var frame1;

  beforeEach(function(){
    game = new Game("Bob");
    frame1 = new Frame(3,4);
    frame2 = new Frame(8,1);
  })

  it("receives player name as an argument", function() {
    expect(game.player).toEqual("Bob");
  });

  it("is initialized with 10 empty (unscored) frames ", function(){
    expect(game.scoreSheet.length).toEqual(10)
    expect(game.scoreSheet).toEqual([[],[],[],[],[],[],[],[],[],[]]);
  })

  it("can receive the results of a frame", function(){
    game.save(frame1, 1)
    game.save(frame2, 2)
    game.save(frame1, 3)
    expect(game.scoreSheet).toEqual([[3,4],[8,1],[3,4],[],[],[],[],[],[],[]])
  })

  it("can show me my score so far", function(){
    game.save(frame1, 1)
    game.save(frame2, 2)
    game.save(frame1, 3)
    expect(game.currentScore()).toEqual(23)
  })

  it("can show me my score after 10th frame", function(){
    for(var i = 0 ; i < 10 ; i++) {
      game.save(frame1, i)
    }
    expect(game.currentScore()).toEqual(70)
  })

})
