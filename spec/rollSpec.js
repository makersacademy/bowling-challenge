describe('Roll', function () {

  var roll;

  beforeEach(function () {
    roll = new Roll ();
  })

  describe('initialization', function () {
    it('can be created', function () {
      expect(roll instanceof Roll).toBe(true)
    })
  })

})
