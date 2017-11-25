describe('Roll', function() {

  beforeEach(function() {
    roll = new Roll;
  })

  describe('#pinfall', function() {
    it('holds number of pins knocked down', function() {
      expect(roll.pinfall).toEqual(0);
    })
  })

  describe('#increasePinfall', function() {
    it('increases the current pinfall by 1', function() {
      roll.increasePinfall();
      expect(roll.pinfall).toEqual(1);
    })

    it("can't be increased over 10", function() {
      roll.pinfall = 10;
      roll.increasePinfall();
      expect(roll.pinfall).toEqual(10);
    })
  })

  describe('#decreasePinfall', function() {
    it('decreases the current pinfall by 1', function() {
      roll.increasePinfall();
      roll.decreasePinfall();
      expect(roll.pinfall).toEqual(0);
    })

    it("can't be decreased below 0", function() {
      roll.decreasePinfall();
      expect(roll.pinfall).toEqual(0);
    })
  })
})
