

describe("Frame", function(){

  var frame;
  var rollOne;
  var rollTwo;

  beforeEach(function(){
    rollOne = 5;
    rollTwo = 7;
    frame = new Frame(rollOne, rollTwo);
  });

  describe("init", function(){
    it("will store two rolls in an array", function(){
      expect(frame._rolls.constructor).toBe(Array);
      expect(frame._rolls.length).toEqual(2);
    });
    it("will create a max score of ten", function(){
      expect(frame.MAX_SCORE).toEqual(10)
    });

  });
});
