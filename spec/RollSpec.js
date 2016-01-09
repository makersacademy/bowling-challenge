describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll;
  })

  describe("with randomised result", function() {
    it("returns a random number of pins hit from 0 to 10", function() {
      expect(roll.roll()).not.toEqual(null);
    })
  })

  describe("without randomised result", function() {
    beforeEach(function() {
      spyOn(Math, "random").and.returnValue(0.46);
    })
    it("returns a random number of pins hit from 0 to 10", function() {
      expect(roll.roll()).toEqual(5);
    })
    
  })
})
