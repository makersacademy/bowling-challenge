describe('Scorer', function() {
  var scorer;

  beforeEach(function(){
    scorer = new Scorer();
  });

  function multiRoll(numberOfRolls,RollScore){
    for (var i = 0; i < numberOfRolls; i++) {
      scorer.roll(RollScore)
    };
  };

  it('gives a score of 0 if no pins are hit', function() {
   multiRoll(20,0);
    expect(scorer.total()).toEqual(0);
  });

  it('gives a score of 20 if 1 pin is hit each roll', function() {
    multiRoll(20,1);
    expect(scorer.total()).toEqual(20);
  });

  it('gives a score of 12 if the second roll is a spare', function() {
    scorer.roll(4);
    scorer.roll(6);
    scorer.roll(1);
    multiRoll(17,0);
    expect(scorer.total()).toEqual(12);
  });

  it('gives as score of 35 if 5 rolls of 5 are rolled', function() {
    multiRoll(5,5);
    multiRoll(15,0);
    expect(scorer.total()).toEqual(35);
  });

  it('gives a score of 10 with 1 strike', function() {
    scorer.roll(10);
    multiRoll(18,0);
    expect(scorer.total()).toEqual(10);
  });

  it('gives a score of 20 after a strike a 2 and a 3', function() {
    scorer.roll(10);
    scorer.roll(2);
    scorer.roll(3);
    multiRoll(16,0);
    expect(scorer.total()).toEqual(20);
  });



});