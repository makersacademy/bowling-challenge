describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('testing', function() {
    it ('returns testing', function() {
      expect(bowling.test()).toEqual('test')
    });
  });

});
