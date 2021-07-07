describe("Frame", function() {
  var frame;
  var frames;

  beforeEach(function(){
    frame = new Frame();
    frames = [];
  });


  it("should reset score to 0", function() {
    expect(frame.getCurrentScore()).toEqual(0);
  });

  it('it has frames by default', function(){
    //frame.getFrames();
    expect(frame.getFrames).toBeTruthy(frames);
  });

  describe('isFinal', function(){
    it('returns false', function(){
      expect(frame.isFinal()).toBeFalsy();
    });
  });

  describe("canBowl", function(){
    it("returns true", function(){
      expect(frame.canBowl()).toBeTruthy();
    });
  });

  describe("firstBowl", function(){
    it("returns frame", function(){
      expect(frame.firstBowl(8)).toEqual(0);
    });
  });

  describe('is under 0', function() {
    it('throws an error', function() {
      expect(function() {frame.bowl(-1)}).toThrow();
    });
  });

  describe('is over 10', function() {
    it('throws an error', function() {
      expect(function() {frame.bowl(11)}).toThrow();
    });
  });
}); //end of frame func
