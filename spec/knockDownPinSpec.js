describe("Knocking pins down", function() {
  var pins;
  beforeEach(function() {
    pins = new KnockDownPin()
  })

  describe("attempt", function() {
    it("returns a whole number between one and ten", function() {
      attempt = pins.attempt()
      expect(attempt >= 0 && attempt <= 10).toEqual(true)
    })
  })
})
