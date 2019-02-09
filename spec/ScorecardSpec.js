describe("Scorecard", function() {
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a single turn", function(){
    scorecard.record.roll("5");
    scorecard.record.roll("4");
    expect(scorecard.see()[0]).toEqual(["5","4"]);
    expect(scorecard.score()).toEqual([9]);
  });

  it("can record more than one turn", function(){
    scorecard.record.roll("5");
    scorecard.record.roll("4");
    scorecard.record.roll("6");
    scorecard.record.roll("2");
    expect(scorecard.see()).toEqual([["5","4"],["6","2"]]);
    expect(scorecard.score()).toEqual([9,17]);
  });

  it("can record a spare",function(){
    scorecard.record.roll("5");
    scorecard.record.roll("/");
    expect(scorecard.see()).toEqual([["5","/"]]);
  });

  it("can record a strike",function(){
    scorecard.record.roll("X");
    expect(scorecard.see()).toEqual([["X",null]]);
  });

  it("throws an error if given invalid roll",function(){
    expect(function(){scorecard.record.roll("a")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record.roll("24")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scorecard.record.roll("10")}).toThrow(
      new Error("invalid character")
    );
  });

  it("prevents entering new scores after 10 frames",function(){
    for(var i = 1; i <= 10; i++){
      scorecard.record.roll("4");
      scorecard.record.roll("4");
    }
    expect(function(){scorecard.record.roll("5")}).toThrow(new Error ("Game is over"))
  });

  it("allows one more roll on frame 10 if frame 10 had a spare", function(){
    for(var i = 1; i <= 10; i++){
      scorecard.record.roll("4");
      scorecard.record.roll("/");
    }
    expect(function(){scorecard.record.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["4","/","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had a strike", function(){
    for(var i = 1; i <= 9; i++){
      scorecard.record.roll("4");
      scorecard.record.roll("5");
    }
    scorecard.record.roll("X");
    scorecard.record.roll("3");
    expect(function(){scorecard.record.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["X","3","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had two strikes", function(){
    for(var i = 1; i <= 9; i++){
      scorecard.record.roll("4");
      scorecard.record.roll("5");
    }
    scorecard.record.roll("X");
    scorecard.record.roll("X");
    expect(function(){scorecard.record.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scorecard.record.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard.lastFrame()).toEqual(["X","X","5"]);
  });

  it("throws an error if a player scores a / on first roll of frame",function(){
    expect(function(){scorecard.record.roll("/")}).toThrow(new Error ("illegal spare"))
  });


  it("can evaluate a spare",function(){
    scorecard.record.roll("5");
    scorecard.record.roll("/");
    scorecard.record.roll("5");
    scorecard.record.roll("4");
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
