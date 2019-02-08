describe("Scorecard", function() {
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a single turn", function(){
    scorecard.record("5");
    scorecard.record("4");
    expect(scorecard.see()[0]).toEqual(["5","4"]);
    expect(scorecard.score()).toEqual([9]);
  });

  it("can record more than one turn", function(){
    scorecard.record("5");
    scorecard.record("4");
    console.log(scorecard.lastFrame());
    console.log(scorecard._scorecard.length)
    scorecard.record("6");
    scorecard.record("2");
    expect(scorecard.see()).toEqual([["5","4"],["6","2"]]);
    expect(scorecard.score()).toEqual([9,17]);
  });

  it("can record a spare",function(){
    scorecard.record("5");
    scorecard.record("/");
    expect(scorecard.see()).toEqual([["5","/"]]);
  });

  it("can record a strike",function(){
    scorecard.record("5");
    scorecard.record("/");
    expect(scorecard.see()).toEqual([["5","/"]]);
  });

  it("throws an error if given invalid roll",function(){
    expect(function(){scorecard.record("a")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record("24")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record("10")}).toThrow(
      new Error("invalid character")
    );
  });

  it("prevents entering new scores after 10 frames",function(){
    for(var i = 1; i <= 10; i++){
      scorecard.record("4");
      scorecard.record("4");
    }
    expect(function(){scorecard.record("5")}).toThrow(new Error ("Game is over"))
  });

  it("allows one more roll on frame 10 if frame 10 had a spare", function(){
    for(var i = 1; i <= 10; i++){
      scorecard.record("4");
      scorecard.record("/");
    }
    expect(function(){scorecard.record("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["4","/","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had a strike", function(){
    for(var i = 1; i <= 10; i++){
      scorecard.record("4");
      scorecard.record("X");
    }
    expect(function(){scorecard.record("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["4","X","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had two strikes", function(){
    for(var i = 1; i <= 9; i++){
      scorecard.record("4");
      scorecard.record("X");
    }
    scorecard.record("X");
    scorecard.record("X");
    console.log(scorecard.score());
    expect(function(){scorecard.record("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["X","X","5"]);
  });

  it("throws an error if a player scores a / on first roll of frame",function(){
    expect(function(){scorecard.record("/")}).toThrow(new Error ("invalid spare"))
  });


  it("can evaluate a spare",function(){
    scorecard.record("5");
    scorecard.record("/");
    scorecard.record("5");
    scorecard.record("4");
    expect(scorecard.score()).toEqual([15,24]);
  });
  //Handle most recent frame (strikeetc) having nothing to evaluate to
  //handle incomplete frames
  //frame number may not add to more than 10
  //may not strike on turn 2
  //may not spare on turn 1
  //strike makes next roll null, unless frame 10
  //strike([frame])
  //can calculate

  // "/".absolute value = 10-sameframe[0]
  // "X".absolute value = 10


});
