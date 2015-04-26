describe("Roll", function(){

  var roll;
  beforeEach(function() {
    roll = new Roll(null);
  });

  describe('basic properties', function(){

    it('should start with no pins knocked', function(){
      expect(roll.pinsknockedtotal).toEqual(null);
    });

    it('can knock pins down after roll', function(){
      roll.play(4)
      expect(roll.pinsknockedtotal).toEqual(4);
    });
  });
});
