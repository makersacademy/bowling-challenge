describe("Frame", function() {
  var frame, firstShot, secondShot, thirdShot;

  beforeEach(function(){
    frame = new Frame();
  });

  describe("Rolls", function(){

    it('begins with no rolls', function(){
      expect(frame.rolls).toEqual([]);
    });

    it('adds the first roll to the frame', function(){
      firstShot = 5;
      frame.addRoll(firstShot);
      expect(frame.rolls).toContain(firstShot);
    });

    it('adds the second roll to the frame', function(){
      secondShot = 4;
      frame.addRoll(secondShot);
      expect(frame.rolls).toContain(secondShot);
    });

    it('raises an error if  a third roll is attempted', function(){
      firstShot = 5;
      secondShot = 4;
      thirdShot = 3;
      frame.addRoll(firstShot);
      frame.addRoll(secondShot);
      expect(function() {frame.addRoll(thirdShot);}).toThrowError("You have reached the limit of rolls for this frame");
    });

    it('raises an error if more than 10 pins are knocked down in a frame', function(){
      firstShot = 9;
      secondShot = 2;
      frame.addRoll(firstShot);
      expect(function() {frame.addRoll(secondShot);}).toThrowError("Erorr: There are only 10 pins in a frame");
    });

    it('saves the frame bonus as strike if the first shot knocks down 10 pins', function(){
      firstShot = 10;
      frame.addRoll(firstShot);
      frame.isStrike();
      expect(frame.bonus).toEqual("strike");
    });

    it('saves the frame bonus as spare if the first and second shot knock down 10 pins', function(){
      firstShot = 5;
      secondShot = 5;
      frame.addRoll(firstShot);
      frame.addRoll(secondShot);
      frame.isSpare();
      expect(frame.bonus).toEqual("spare");
    });

  });


});
