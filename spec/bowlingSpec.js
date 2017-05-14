describe('Bowling', function () {

  var Bowling = require('../js/bowling');
  var bowling;

  beforeEach(function () {
    bowling = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      var name = bowling.constructor.name
      expect(name).toBe('Bowling')
    })
  })

})
