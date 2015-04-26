describe("Roll", function(){

  var roll;
  beforeEach(function() {
    roll = new Roll();
  });

  describe('basic properties', function(){

    it('should start with no pins knocked', function(){
      expect(roll.pinsknockedtotal).toEqual(0);
    });

    it('can knock pins down after roll', function(){
      roll.ball(4)
      expect(roll.pinsknockedtotal).toEqual(4);
    });
  });
});
