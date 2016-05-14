(function () {
   'use strict';
}());

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('Score', function(){
    it('Score begins at 0', function(){
      expect(bowling.score).toEqual(0);
    });
  });

});
