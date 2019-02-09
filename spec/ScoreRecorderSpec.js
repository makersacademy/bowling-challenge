describe("ScoreRecorder",function(){
  var scorecard;
  var scoreRecorder;
  beforeEach(function(){
    scorecard = []
    scoreRecorder = new ScoreRecorder(scorecard);
  });
  it("can record a single turn", function(){
    scoreRecorder.roll("5");
    scoreRecorder.roll("4");
    expect(scorecard).toEqual([["5","4"]]);
  });
  it("can record more than one turn", function(){
    scoreRecorder.roll("5");
    scoreRecorder.roll("4");
    scoreRecorder.roll("6");
    scoreRecorder.roll("2");
    expect(scorecard).toEqual([["5","4"],["6","2"]]);
  });

  it("can record a spare",function(){
    scoreRecorder.roll("5");
    scoreRecorder.roll("/");
    expect(scorecard).toEqual([["5","/"]]);
  });
  it("can record a strike",function(){
    scoreRecorder.roll("X");
    expect(scorecard).toEqual([["X",null]])
  })
  it("throws an error if given invalid roll",function(){
    expect(function(){scoreRecorder.roll("a")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scoreRecorder.roll("24")}).toThrow(
      new Error("invalid character")
    );
    expect(function(){scoreRecorder.roll("10")}).toThrow(
      new Error("invalid character")
    );
  });

  it("prevents entering new scores after 10 frames",function(){
    for(var i = 1; i <= 10; i++){
      scoreRecorder.roll("4");
      scoreRecorder.roll("4");
    }
    expect(function(){scoreRecorder.roll("5")}).toThrow(new Error ("Game is over"))
  });

  it("allows one more roll on frame 10 if frame 10 had a spare", function(){
    for(var i = 1; i <= 10; i++){
      scoreRecorder.roll("4");
      scoreRecorder.roll("/");
    }
    expect(function(){scoreRecorder.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scoreRecorder.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard[scorecard.length-1]).toEqual(["4","/","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had a strike", function(){
    for(var i = 1; i <= 10; i++){
      console.log("butwhy")
      scoreRecorder.roll("X");
    }
    scoreRecorder.roll("3");
    expect(function(){scoreRecorder.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scoreRecorder.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard[scorecard.length-1]).toEqual(["X","3","5"]);
  });

  it("allows one more roll on frame 10 if frame 10 had two strikes", function(){
    for(var i = 1; i <= 9; i++){
      scoreRecorder.roll("4");
      scoreRecorder.roll("5");
    }
    scoreRecorder.roll("X");
    scoreRecorder.roll("X");
    expect(function(){scoreRecorder.roll("5")}).not.toThrow(new Error ("Game is over"));
    expect(function(){scoreRecorder.roll("5")}).toThrow(new Error ("Game is over"));
    expect(scorecard[scorecard.length-1]).toEqual(["X","X","5"]);
  });

  it("throws an error if a player scores a / on first roll of frame",function(){
    expect(function(){scoreRecorder.roll("/")}).toThrow(new Error ("invalid spare"))

  });
  it("throws an error if a player scores a / on first roll of frame",function(){
    scoreRecorder.roll("4");
    scoreRecorder.roll("/");
    expect(function(){scoreRecorder.roll("/")}).toThrow(new Error ("invalid spare"))

  });

});
