describe ("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe ("Current frame is kept count of: ", function() {
    it("starts at 1", function(){
      expect(frame._currFrame).toEqual(1)
    });

    it("increments by 1 after score submission", function(){
      frame.nextFrame();
      expect(frame._currFrame).toEqual(2)
    });

    it("initiates an 11th frame if the 10th frame is a STRIKE", function() {
      frame._strike = true
      for(var i = 1; i < 11; i++){
        frame.nextFrame();
      }
      expect(frame._currFrame).toEqual(11);
    });

    it("initiates an 11th frame if the 10th frame is a SPARE", function() {
      frame._spare = true;
      for(var i = 1; i < 11; i++){
        frame.nextFrame();
      }
      expect(frame._currFrame).toEqual(11);
    });

    it("ends the game on the 10th frame if score < 10", function() {
      for(var i = 1; i < 10; i++){
        frame.nextFrame();
      }
      expect(function() { frame.nextFrame(); }).toThrow("Game Finished!");
    });
  });


  describe ("Updates roll count: ", function() {
    it("changes the value for roll 1", function() {
      frame.setRoll1(5);
      expect(frame._roll1).toEqual(5);
    });

    it("changes the value for roll 2", function() {
      frame.setRoll2(7);
      expect(frame._roll2).toEqual(7);
    });

    it("throws an error if score < 0", function() {
      expect(function() { frame.setRoll1(-1) }).toThrow("Roll score less than 0!");
    });

    it("throws an error if score > 10", function() {
      expect(function() { frame.setRoll1(11) }).toThrow("Roll score exceeds 10!");
    });

    it("throws an error if score is null", function() {
      expect(function() {frame.setRoll1("A") }).toThrow("Enter a whole number!");
    });
  });

});
