describe("First bowl", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("on creation of game an emnpty frame object is created", function() {
    expect(game.currentFrame().frameNumber).toEqual(1);
    expect(game.currentFrame().numberOfBowls()).toEqual(0);
    expect(game.currentFrame().frameNumber).toEqual(1);
    expect(game.currentFrame().remainingPins).toEqual(10);
  });

  it("first bowl (x<10 pins knocked down ) reduces number of pins by x", function(){
    game.bowl(3);
    expect(game.currentFrame().remainingPins).toEqual(7);
    expect(game.currentFrame().numberOfBowls()).toEqual(1);
    expect(game.currentFrame().complete).toEqual(false);
  });

  it("after two bowls (x + y < 10), score recorded in frame.bowls and game.score", function(){
    game.bowl(3);
    game.bowl(5);
    expect(game.frames[0].remainingPins).toEqual(2);
    expect(game.frames[0].numberOfBowls()).toEqual(2);
    expect(game.frames[0].complete).toEqual(true);

    expect(game.score[0]).toEqual(8);
    expect(game.frames[0].bowls).toEqual([3,5]);
  });

  it("after two frames, the scores are collected correctly", function() {
    game.bowl(3)
    game.bowl(2)
    game.bowl(5)
    expect(game.currentFrame().frameNumber).toEqual(2);
    game.bowl(1)
    expect(game.score).toEqual([5,11,0,0,0,0,0,0,0,0])
    expect(game.compileScores()).toEqual([[3,2],[5,1]])
  });

  it("first bowl is a spare, total score after first bowl updated to take into account next bowl", function() {
    game.bowl(4);
    console.log("in the test and the current frame is")
    console.log(game.currentFrame())
    game.bowl(6);
    console.log("in the test and the current frame is")
    console.log(game.currentFrame())
    expect(game.currentFrame().bowlsToDouble).toEqual(1)
    game.bowl(5);
    expect(game.score[0]).toEqual(15);
    game.bowl(3);
    expect(game.score[1]).toEqual(23);
  });

  it("after a strike, the next two bowls are doubled", function() {
    game.bowl(10)
    game.bowl(3)
    expect(game.frames[0].score).toEqual(13)
    game.bowl(5)
    expect(game.frames[0].score).toEqual(18)
    expect(game.score).toEqual([18,26,0,0,0,0,0,0,0,0])
  })

  it("Three strikes in a row", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect(game.frames[0].score).toEqual(30)
    expect(game.frames[1].score).toEqual(20)
    expect(game.frames[2].score).toEqual(10)
    expect(game.score[2]).toEqual(60)
  });

  it("12 strikes", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect(game.score[9]).toEqual(300)
  })
  it ("error thrown after 12 strikes on 13th bowl", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect( function(){ game.bowl(10); } ).toThrow();
  })

  it("the frame numnber increases correctly - changes at start of bowl", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect(game.currentFrame().frameNumber).toEqual(3)
  });


});
