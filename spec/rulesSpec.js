describe('Rules', function() {
  beforeEach(function() {
    rules = new Rules();
  });

  describe('#pinChance', function() {
    it('displays numbers from the correct range', function() {
      expect([0,1,2,3,4,5,6,7,8,9,10]).toContain(rules.pinChance());
    });
  });
});