describe ("Frame", function(){

  beforeEach(function(){
    frame = new Frame();
  });

  it("should add a score", function(){
    frame.setScore1(5);
    expect(frame.score()).toEqual(5);
  });

  it("should two scores that total less than 10", function(){
    frame.setScore1(5);
    frame.setScore2(4);
    expect(frame.score()).toEqual(9);
  });

  it("should be a strike if first score is 10", function() {
    frame.setScore1(10);
    expect(frame.score()).toEqual(10);
    expect(frame.isStrike()).toBeTruthy();
  });

  it("should be a spare if two scores total 10", function() {
    frame.setScore1(5);
    frame.setScore2(5);
    expect(frame.score()).toEqual(10);
    expect(frame.isSpare()).toBeTruthy();
  });

  describe('complete', function() {
    it('after two rolls', function(){
      frame.setScore1(5);
      frame.setScore2(5);
      expect(frame.isComplete()).toBeTruthy();
    });
    it('after strike', function(){
      frame.setScore1(5);
      frame.setScore2(5);
      expect(frame.isComplete()).toBeTruthy();
    });
  });

  describe('incomplete', function() {
    it("when initialized", function (){
      expect(frame.isComplete()).toBeFalsy();
    });
  });
});
