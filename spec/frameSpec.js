describe ("Frame",function() {
  var frame;

  beforeEach(function(){
    frame = new Frame(1);
  });

  it("is the nth frame",function(){
    expect(frame.number()).toEqual(1);
  });
  it("has 10 pins",function(){
    expect(frame.pins).toEqual(10);
  });

  it("counts the scores of the first roll. Player hits 0",function(){
    frame.firstRoll(0);
    expect(frame.firstScore).toEqual(0);
    expect(frame.scores).toEqual(0);
  });


  it("adds the hit pins to scores. Player hits 1 ",function(){
    frame.firstRoll(1);
    expect(frame.pins).toEqual(9);
    expect(frame.scores).toEqual(1);
  });

  it("has counts the scores of second roll. Player hits 1", function(){
    frame.secondRoll(1);
    expect(frame.secondScore).toEqual(1);
    expect(frame.scores).toEqual(1);
  });

  it("is a spare when all pins are knocked down", function() {
    frame.firstRoll(5);
    frame.secondRoll(5);
    expect(frame.isSpare()).toBe(true);
  });

  it("is not a spare when not all pins are knocked down",function(){
    frame.firstRoll(5);
    frame.secondRoll(3);
    expect(frame.isSpare()).toBe(false);
  });

  it("is a strike when all pins are knocked down with the first roll", function(){
    frame.firstRoll(10);
    expect(frame.isStrike()).toBe(true);
  });

  it("is not a strike if firstScore is not 10",function (){
    frame.firstRoll(9);
    expect(frame.isStrike()).toBe(false);
  });

  



})
