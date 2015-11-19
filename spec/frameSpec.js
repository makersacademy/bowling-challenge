describe ('Frame',function () {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it ('is not over when score is 1',function() {
    frame.roll(1);
    expect(frame.isOver()).toBe(false);
  });

  it ('is over when you roll twice',function() {
    frame.roll(1);
    frame.roll(1);
    expect(frame.isOver()).toBe(true);
  });

  it ('is over with a strike',function() {
    frame.roll(10);
    expect(frame.isOver()).toBe(true);
  });

  it ('is a strike',function() {
    frame.roll(10);
    expect(frame.isStrike()).toBe(true);
  });

  it ('is a spare',function(){
    frame.roll(5);
    frame.roll(5);
    expect(frame.isSpare()).toBe(true);
  });

  it("isn't over when you roll a strike for last frame", function(){
    frame.lastFrame = true;
    frame.roll(10);
    expect(frame.isOver()).toBe(false);
  });

  it("isn't over when you roll two strikes for last frame", function(){
    frame.lastFrame = true;
    frame.roll(10);
    frame.roll(10);
    expect(frame.isOver()).toBe(false);
  });

  it("isn't over when you roll nothing", function(){
    frame.lastFrame = true;
    frame.roll(0);
    expect(frame.isOver()).toBe(false);
  });

  it("is over when you roll three strikes for last frame", function(){
    frame.lastFrame = true;
    frame.roll(10);
    frame.roll(10);
    frame.roll(10);
    expect(frame.isOver()).toBe(true);
  });

  it("is over when you 2 bad rolls on the last frame", function(){
    frame.lastFrame = true;
    frame.roll(1);
    frame.roll(1);
    expect(frame.isOver()).toBe(true);
  });

  it("is over when you 2 good rolls on the last frame", function(){
    frame.lastFrame = true;
    frame.roll(5);
    frame.roll(5);
    expect(frame.isOver()).toBe(false);
  });

  it("is over when you 2 good rolls on the last frame", function(){
    frame.lastFrame = true;
    frame.roll(5);
    frame.roll(5);
    frame.roll(1);
    expect(frame.isOver()).toBe(true);
  });



});
