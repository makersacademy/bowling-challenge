describe("Game", function() {
   var game;
   var frame1;
   var spareFrame;
   var strikeFrame;

  beforeEach(function(){
    game = new Game("Bob");
    frame1 = new Frame(3,4);
    frame2 = new Frame(8,1);
    spareFrame = new Frame(7,3)
    strikeFrame = new Frame(10,0)
  })

  it("receives player name as an argument", function() {
    expect(game.player).toEqual("Bob");
  });

  it("is initialized with 10 empty (unscored) frames ", function(){
    expect(game.scoreSheet.length).toEqual(10)
    expect(game.scoreSheet).toEqual([null,null,null,null,null,null,null,null,null,null]);
  })

  it("can save the results of a frame", function(){
    game.saveFrame(frame1, 1)
    game.saveFrame(frame2, 2)
    game.saveFrame(frame1, 3)
    expect(game.scoreSheet).toEqual([7,9,7,null,null,null,null,null,null,null])
  })

  it("can show me my score so far", function(){
    game.saveFrame(frame1, 1)
    game.saveFrame(frame2, 2)
    game.saveFrame(frame1, 3)
    expect(game.currentScore()).toEqual(23)
  })


  it("can show me my score after 10th frame", function(){
    for(var i = 0 ; i < 10 ; i++) {
      game.saveFrame(frame1, i)
    }
    expect(game.currentScore()).toEqual(70)
  })

  it("spare score is saved as 'pending'", function(){
    game.saveFrame(frame1, 1)
    game.saveFrame(frame2, 2)
    game.saveFrame(frame1, 3)
    game.saveFrame(spareFrame, 4)
    expect(game.scoreSheet[3]).toEqual("spare")
  })

  it("strike score is also saved as 'pending'", function(){
    game.saveFrame(frame1, 1)
    game.saveFrame(frame2, 2)
    game.saveFrame(frame1, 3)
    game.saveFrame(strikeFrame, 4)
    expect(game.scoreSheet[3]).toEqual("strike")
  })

  it("first roll after a spare is added to the prev' frame's total", function(){
    game.saveFrame(frame1, 1)
    game.saveFrame(frame2, 2)
    game.saveFrame(frame1, 3)
    game.saveFrame(spareFrame, 4)
    game.saveFrame(frame2, 5)
    console.log("frame 4 = "+game.scoreSheet[3])
    expect(game.currentScore()).toEqual(49)
    expect(game.scoreSheet[3]).toEqual(18)
  })
})
