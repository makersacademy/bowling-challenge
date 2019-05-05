describe("Frame", function() {
  var frame;
  var roll1 = jasmine.createSpyObj('roll', ['getRoll'])
  var roll2 = jasmine.createSpyObj('roll', ['getRoll'])

  beforeEach(function() {
    frame = new Frame();
  });

  describe("getCurrentScore", function() {
    it("defaults to 0", function() {
      expect(frame.getCurrentScore()).toBe(0)
    });
  });

  describe("inputScore", function() {
    it("updates the users frame", function(){
      roll1.getRoll.and.callFake(function() {return 4})
      roll2.getRoll.and.callFake(function() {return 2})
      roll1Score = roll1.getRoll()
      roll2Score = roll2.getRoll()
      frame.calculateScore(roll1Score, roll2Score);
      expect(frame.getCurrentScore()).toBe(6)
    });

    it("adds the second roll as 0 if the first roll is 10", function() {
      roll1.getRoll.and.callFake(function() {return 10})
      roll1Score = roll1.getRoll()
      frame.calculateScore(roll1Score);
      expect(frame.getCurrentScore()).toBe(10)
    });
  });

  describe("checkRolls", function() {
    it("checks the number of rolls in the frame", function() {
      frame.addRoll()
      expect(frame.checkRolls()).toBe(2)
    });

    it("roll number cannot be over 2", function() {
      frame.addRoll()
      frame.addRoll()
      expect(frame.checkRolls()).toBe(1);
    });
  });

  describe("getImpossibleRolls", function() {
    it("shows the impossible options for the second roll", function () {
      roll1.getRoll.and.callFake(function() {return 2})
      roll1Score = roll1.getRoll()

      expect(frame.getImpossibleRolls(roll1Score)).toEqual([9, 10])
    });
  });

  describe("isStrike", function() {
    it ("determines that the user rolled a strike", function(){
      frame.calculateScore(10)
      expect(frame.isStrike()).toBe(true)
    });

    it ("determines that the user has not rolled a strike", function(){
      frame.calculateScore(4, 3)
      expect(frame.isStrike()).toBe(false)
    });
  });

  describe("isSpare", function() {
    it ("determines that the user rolled a spare", function(){
      frame.calculateScore(9, 1)
      expect(frame.isSpare()).toBe(true)
    });

    it ("determines that the user has not rolled a spare", function(){
      frame.calculateScore(4, 3)
      expect(frame.isSpare()).toBe(false)
    });
  });
});
