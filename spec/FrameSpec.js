describe("Frame", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("starts with a score of zero", function(){
    expect(frame.score).toEqual(0);
  });

  it("after a roll has a score between zero and 10 (stubbed to 5)", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    frame.roll();
    expect(frame.score).toEqual(5);
  });

  it("the score accumulates for each successive roll (rolls stubbed to 6)", function(){
    spyOn(Math, 'random').and.returnValue(0.6);
    frame.roll();
    frame.roll();
    expect(frame.score).toEqual(12);
  });

});