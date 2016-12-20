describe("Knocking pins down", function() {
  var pins;

  beforeEach(function() {
    game = jasmine.createSpyObj("game", ["strike_scored", "spare_scored"])
    pins = new Pins(game);
  })


  describe("first Roll", function() {

    it("returns a whole number between zero and ten", function() {
      attempt = pins.firstRoll();
      expect(attempt >= 0 && attempt <= 10).toEqual(true)
    })

  })

  describe("second Roll",function() {

    it("has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"firstRoll").and.returnValue(8)
      expect(pins.secondRoll()).not.toBeGreaterThan(2)
    })

    it("has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"firstRoll").and.returnValue(3)
      expect(pins.secondRoll()).not.toBeGreaterThan(7)
    })

    it("has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"firstRoll").and.returnValue(6)
      expect(pins.secondRoll()).not.toBeGreaterThan(4)
    })

  })

})
