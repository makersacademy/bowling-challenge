describe('Roll', function(){
  'use strict'
  var roll;

  beforeEach(function(){
    roll = new Roll(10);
  });

  describe('#play', function(){
    it('when a new roll, if left pins equal 10, the number of knocked down pins must be between 0 and 10',function(){
      var playResult = roll._play();
      expect(playResult>=0 && playResult<=10).toBe(true);
    });
  });
});
