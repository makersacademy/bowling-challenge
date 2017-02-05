'use strict';

describe('pins', function(){
  var pins;

  beforeEach(function(){
    pins = new Pins();
  })

  describe('#knockPin', function() {
    it ('it returns a value >= 0', function(){
      expect(pins.knockPin()).toBeGreaterThan(-1)
    })

    it ('it returns a value <= 10', function(){
      expect(pins.knockPin()).toBeLessThan(11)
    })
  })
})
