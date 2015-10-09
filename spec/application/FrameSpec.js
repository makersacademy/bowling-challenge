describe("Frame", function() {

  var frame;
  var ErrorMessage = "Illegal roll"

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.pinsRemaining).toEqual(10);
  })

  it("has a total score starting at zero", function() {
    expect(frame.totalScore).toEqual(0);
  });

  it("can be set as the last frame", function(){
    frame.setLastFrame();
    expect(frame.isLastFrame).toBe(true);
  });

  describe("#firstRoll", function() {

    it("knocks down pins and retains the value (stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.firstRollScore).toEqual(6);
    });

    it("pins remaining is reduced after roll (roll stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.pinsRemaining).toEqual(4);
    });

    it("doesn't allow repeated rolls", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(function() { frame.firstRoll(); }).toThrowError(ErrorMessage);
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(frame.firstRoll()).toEqual(6);
    });

    it("registers a strike if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      expect(frame.firstRoll()).toEqual("Strike!");
    });

    it("registers a strike if ten pins knocked down (part 2)", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      expect(frame.isStrike).toBe(true);
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.totalScore).toEqual(6);
    });

    describe("in last frame", function(){

      it("resets the pins if a strike is registered", function(){
        frame.setLastFrame();
        spyOn(Math, 'random').and.returnValue(0.99);
        frame.firstRoll();
        expect(frame.pinsRemaining).toEqual(10);
      });

    });

  });

  describe("#secondRoll", function() {

    it("knocks down pins from those remaining after the first roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.secondRollScore).toEqual(3);
    });

    it("pins remaining is reduced after roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.pinsRemaining).toEqual(1);
    });

    it("doesn't allow repeated rolls", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.firstRoll();
      frame.secondRoll();
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

    it("can't be taken before the first roll", function(){
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual(3);
    });

    it("registers a spare if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual("Spare!")
    });

    it("registers a spare if ten pins knocked down (part 2)", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.isSpare).toBe(true)
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.totalScore).toEqual(9);
    });

    it("can't be taken following a strike", function() {
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

    describe("in last frame", function(){

      beforeEach(function(){
        frame.setLastFrame();
        frame.rollsTaken = 1;
        frame.firstRollScore = 6
        frame.totalScore = 6
        frame.pinsRemaining = 4
      });

      it("resets the pins if a spare is registered", function(){
        spyOn(Math, 'random').and.returnValue(0.8);
        frame.secondRoll();
        expect(frame.pinsRemaining).toEqual(10);
      });

      describe("following a strike", function(){

        beforeEach(function(){
          frame.firstRollScore = 10
          frame.totalScore = 10
          frame.pinsRemaining = 10
          frame.isStrike = true
        });

        it("allows a second roll", function(){
          expect(function(){ frame.secondRoll(); }).not.toThrowError();
        });

        it("can register a strike", function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          expect(frame.secondRoll()).toEqual("Strike!");
        });

        it("returns zero when no pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.01);
          expect(frame.secondRoll()).toEqual(0);
        });

        it("resets pins if a strike is registered", function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          frame.secondRoll();
          expect(frame.pinsRemaining).toEqual(10);
        });

      });

    });

  });

  describe("#thirdRoll", function(){

    it("can't be taken before the first roll", function(){
      expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
    });

    it("can't be taken before the second roll", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
    });

    it("can't be taken if frame isn't the last frame", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      frame.secondRoll();
      expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
    });

    describe("in last frame", function(){

      beforeEach(function(){
        frame.setLastFrame();
      });

      it("can't be taken if neither a spare nor strike are rolled first", function(){
        spyOn(Math, 'random').and.returnValue(0.3);
        frame.firstRoll();
        frame.secondRoll();
        expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
      });

      describe("following two strikes", function(){

        beforeEach(function(){
          frame.rollsTaken = 2;
          frame.firstRollScore = 10
          frame.secondRollScore = 10
          frame.totalScore = 20
          frame.pinsRemaining = 10
          frame.isStrike = true
        });

        it("returns the number of pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.4);
          expect(frame.thirdRoll()).toEqual(4);
        });

        it("updates total score", function(){
          spyOn(Math, 'random').and.returnValue(0.4);
          frame.thirdRoll();
          expect(frame.totalScore).toEqual(24);
        });

        it("registers a strike if ten pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

        it("returns zero when no pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.01);
          expect(frame.thirdRoll()).toEqual(0);
        });

      });


      describe("following a spare", function(){

        beforeEach(function(){
          frame.rollsTaken = 2;
          frame.firstRollScore = 8
          frame.secondRollScore = 2
          frame.totalScore = 10
          frame.pinsRemaining = 10
          frame.isSpare = true
        });

        it("returns the number of pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.4);
          expect(frame.thirdRoll()).toEqual(4);
        });

        it("updates total score", function(){
          spyOn(Math, 'random').and.returnValue(0.4);
          frame.thirdRoll();
          expect(frame.totalScore).toEqual(14);
        });

        it("registers a strike if ten pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

        it("returns zero when no pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.01);
          expect(frame.thirdRoll()).toEqual(0);
        });

      });

      describe("when going for a spare", function(){

        beforeEach(function(){
          frame.rollsTaken = 2;
          frame.firstRollScore = 10
          frame.secondRollScore = 4
          frame.totalScore = 14
          frame.pinsRemaining = 6
          frame.isStrike = true
        });

        it("returns the number of pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.5);
          expect(frame.thirdRoll()).toEqual(3);
        });

        it("registers a spare if remaining pins knocked down", function(){
          spyOn(Math, 'random').and.returnValue(0.9);
          expect(frame.thirdRoll()).toEqual("Spare!");
        });

      });

    });

  });

  describe("#spareUpdate", function(){

    it("adds the number given to the total score of the frame", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      frame.secondRoll();
      var number = 6;
      frame.spareUpdate(number);
      expect(frame.totalScore).toEqual(16);
    });

    it("does nothing if called on a frame that didn't register a spare", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.firstRoll();
      frame.secondRoll();
      var number = 6;
      frame.spareUpdate(number);
      expect(frame.totalScore).toEqual(5);
    });

    it("does nothing if called on a frame that has already been updated", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      frame.secondRoll();
      var number = 6;
      frame.spareUpdate(number);
      frame.spareUpdate(number);
      expect(frame.totalScore).toEqual(16);
    });

  });

  describe("#strikeUpdate", function(){

    it("adds the number given to the total score of the frame", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      var number = 6;
      frame.strikeUpdate(number);
      expect(frame.totalScore).toEqual(16);
    });

    it("does nothing if called on a frame that didn't register a strike", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.firstRoll();
      frame.secondRoll();
      var number = 6;
      frame.strikeUpdate(number);
      expect(frame.totalScore).toEqual(5);
    });

    it("does nothing if called on a frame that has already been updated", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      var number = 6;
      frame.strikeUpdate(number);
      frame.strikeUpdate(number);
      expect(frame.totalScore).toEqual(16);
    });

  });

  describe("MANUAL ROLL", function(){

    it("can be set to manual roll input", function(){
      frame.switchRandomManual();
      expect(frame.isManualRolls).toBe(true);
    });

    it("is set with random rolls by default", function(){
      expect(frame.isManualRolls).toBe(false);
    });

    it("switches back to random when toggled twice", function(){
      frame.switchRandomManual();
      frame.switchRandomManual();
      expect(frame.isManualRolls).toBe(false);
    });

    it("takes the roll score given when set to manual", function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      frame.switchRandomManual();
      frame.firstRoll(5);
      frame.secondRoll(3);
      expect(frame.firstRollScore).toEqual(5);
      expect(frame.secondRollScore).toEqual(3);
    });


    it("raises error if roll score given is greater than the number of pins remaining", function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      frame.switchRandomManual();
      frame.firstRoll(7);
      expect(function() { frame.secondRoll(5); }).toThrowError(ErrorMessage);
    });

  })

});
