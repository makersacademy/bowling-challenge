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
    it("has a null value first bowl score", function(){
      expect(frame.firstRollScore).toBe(null)
    });
    it("has a null value second bowl score", function() {
      expect(frame.secondRollScore).toBe(null)
    });
  });

  describe('#bowl', function(){
    it('saves the score of the first bowl', function(){
      rollSpy.result.and.callFake(function() { return 3 });
      console.log(rollSpy.result())
      frame.bowl()
      expect(frame.firstRollScore).toBe(frame.roll.result())
    });
  });



});
