describe("Frame", function(){
  var frame
  var rollSpy

  beforeEach(function(){
    rollSpy  = jasmine.createSpyObj("roll", ["go", "result"]);
    frame = new Frame(rollSpy);

  });

  describe("default", function(){
    it("has a roll within it?", function(){
      expect(frame.roll).toBe(rollSpy)
    });
    it("has a null value second bowl score", function() {
      expect(frame.scores).toEqual([])
    });
  });

  describe("#resetPins", function(){
    it("resets the frame scores to 0", function(){
      rollSpy.result.and.callFake(function() { return 3 });
      frame.bowl();
      frame.bowl();
      frame.bowl();
      expect(frame.scores).toEqual([3])
    });;
  });

  describe('#bowl', function(){
    beforeEach(function(){
      rollSpy.result.and.callFake(function() { return 3 });
    });
    it('saves the score of the first bowl', function(){

      frame.bowl()
      expect(frame.firstRollScore()).toBe(frame.roll.result())
    });
    it('saves the score of the second bowl', function(){
      frame.bowl();
      frame.bowl();
      expect(frame.secondRollScore()).toBe(frame.roll.result());
    });
    it('can calculate the the remaining number of pins after the first bowl', function(){
      frame.bowl();
      expect(frame.remainingPins()).toEqual(7)
    });
  });

});
