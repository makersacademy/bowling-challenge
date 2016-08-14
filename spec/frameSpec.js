describe ("Frame",function() {
  var frame;

  beforeEach(function(){
    frame = new Frame(1);
    tenthFrame = new Frame(10);
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

  it("is the 10th frame",function(){
    expect(tenthFrame.number()).toEqual(10);
  });
  it("can roll three balls when spare 10th frame",function(){
    tenthFrame.firstRoll(9);
    tenthFrame.secondRoll(1);
    tenthFrame.thirdRoll(3);
    expect(tenthFrame.scores).toEqual(13);
  });
  it("can roll three balls when strike 10th frame",function(){
    tenthFrame.firstRoll(10);
    tenthFrame.secondRoll(5);
    tenthFrame.thirdRoll(7);
    expect(tenthFrame.scores).toEqual(22);
  })




})
