describe('Roll', function(){
  'use strict'
  var roll;

  beforeEach(function(){
    roll = new Roll(10);
  });

  describe(':new', function(){
    it('when a new roll, the result is setted to 0',function(){
      expect(roll._result).toBe(0);
    });
  });

  describe('#play', function(){
    it('when a new roll, the number of knocked down pins must be between 0 and 10',function(){
      var playResult = roll.play();
      expect(playResult>=0 && playResult<=10).toBe(true);
    });
  });
});
