describe("Bonus", function() {
  var bonus, game;

  beforeEach(function() {
    bonus = new Bonus();
    game = {areNoPinsLeft: function() {return true;},
      getRolls: function() {return 1;}
    };
  });
  it('initialises default settings', function() {
    expect(bonus.getStrikeOrSpare()).toEqual("");
    expect(bonus.getNext()).toEqual(0);
    expect(bonus.getNextButOne()).toEqual(0);
  });
  it('knows when there is a strike', function() {
    spyOn(game, 'areNoPinsLeft').and.returnValue(true);
    spyOn(game, 'getRolls').and.returnValue(1);
    bonus.assessFutureBonuses(game);
    expect(bonus.getStrikeOrSpare()).toEqual("Strike");
    expect(bonus.getNext()).toEqual(1);
    expect(bonus.getNextButOne()).toEqual(1);
  });
  it('knows when there is a spare', function() {
    spyOn(game, 'areNoPinsLeft').and.returnValue(true);
    spyOn(game, 'getRolls').and.returnValue(2);
    bonus.assessFutureBonuses(game);
    expect(bonus.getStrikeOrSpare()).toEqual("Spare");
    expect(bonus.getNext()).toEqual(1);
    expect(bonus.getNextButOne()).toEqual(0);
  });
});

  // it('sets bonus when there is one', function() {
  //   debugger;
  //   spyOn(bonus, 'getExtra').and.returnValue(2);
  //   bonus.setHits(6);
  //   bonus.updateBonus();
  //   expect(bonus.getExtra()).toEqual(2);
  //   expect(bonus.getBonus()).toEqual(12);
  // })
  // it('sets no bonus when there isn\'t one', function() {
  //   spyOn(bonus, 'getExtra').and.returnValue(0);
  //   bonus.setHits(6);
  //   bonus.updateBonus();
  //   expect(bonus.getBonus()).toEqual(0);
  // });
  // it('sets strikes', function() {
  //   spyOn(bonus, 'getPins').and.returnValue(0);
  //   spyOn(bonus, 'getRoll').and.returnValue(1);
  //   bonus.updateStrikeOrSpare();
  //   expect(bonus.getStrikeOrSpare()).toEqual("Strike")
  // });
  // it('sets spares', function() {
  //   spyOn(bonus, 'getPins').and.returnValue(0);
  //   spyOn(bonus, 'getRoll').and.returnValue(2);
  //   bonus.updateStrikeOrSpare();
  //   expect(bonus.getStrikeOrSpare()).toEqual("Spare")
  // });
  // it('updates when a spare', function() {
  //   spyOn(bonus, 'getRoll').and.returnValue(1);
  //   bonus.updateStrikeOrSpare();
  //   expect(bonus.getStrikeOrSpare()).toEqual("Strike");
  // });
  // it('updates when a strike', function() {
  //   spyOn(bonus, 'getRoll').and.returnValue(2);
  //   bonus.updateStrikeOrSpare();
  //   expect(bonus.getStrikeOrSpare()).toEqual("Spare");
  // });
