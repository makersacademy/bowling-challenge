describe('BonusRolls', function() {

  var bonusRolls;
  beforeEach(function() {
    bonusRolls = new BonusRolls(1)
  });

  it('has ten pins', function() {
    expect(bonusRolls.pins()).toEqual(10)
  });

  it('a hit increases points and decreases pins', function() {
    spyOn(bonusRolls, '_hit').and.returnValue(4);
    bonusRolls.roll()
    expect(bonusRolls.pins()).toEqual(6)
    expect(bonusRolls.points()).toEqual(4)
  });

  it('has no bonus feature', function() {
    expect(bonusRolls.bonusFeature()).toBeFalsy()
  });

  describe('bonus rolls for a spare', function() {

    var bonusRolls;
    beforeEach(function() {
      bonusRolls = new BonusRolls(1)
    });

    it('is finished after one roll', function() {
      bonusRolls.roll()
      expect(bonusRolls.isFinished()).toBeTruthy()
    });


    it('returns a bonus for a spare', function() {
      spyOn(bonusRolls, '_hit').and.returnValue(4);
      bonusRolls.roll()
      expect(bonusRolls.spareBonus()).toEqual(4)
    });

  });

  describe('bonus rolls for a strike', function() {

    var bonusRolls;
    beforeEach(function() {
      bonusRolls = new BonusRolls(2)
    });

    it('is finished after two rolls', function() {
      bonusRolls.roll()
      expect(bonusRolls.isFinished()).toBeFalsy()
      bonusRolls.roll()
      expect(bonusRolls.isFinished()).toBeTruthy()
    });

    it('returns a bonus for a strike', function() {
      spyOn(bonusRolls, '_hit').and.returnValue(4);
      bonusRolls.roll()
      bonusRolls.roll()
      expect(bonusRolls.strikeBonus()).toEqual(8)
    });

    it('resets the pins after a strike', function() {
      spyOn(bonusRolls, '_hit').and.returnValue(10);
      expect(bonusRolls.pins()).toEqual(10)
    });

  });

});
