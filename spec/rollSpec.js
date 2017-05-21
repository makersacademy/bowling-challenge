describe('Roll', function () {
  var Roll = require('../js/roll')
  var roll;

  beforeEach(function () {
    roll = new Roll ();
  })

  describe('initialization', function () {
    it('can be created', function () {
      expect(roll instanceof Roll).toBe(true)
    })
  })

  describe('function knockPinsDown', function () {
    it('knocks a specified number of pins down for that roll', function () {
      pinsDown = 9
      roll.knockPinsDown(pinsDown)
      expect(roll._pinsDown).toEqual(pinsDown)
    })
  })

})
