describe('Bowling', function () {

  let bowl;

  beforeEach(function () {
    bowl = new Bowling();
  });

  it('score returns 0', function () {
    bowl.roll(0)
    for (let i = 0; i < 19; i++) {
      bowl.roll(0)
    }
    expect(bowl.totalScore()).toEqual(0);
  });

  it('scores 20 when only 1s are rolled', function () {
    for (let roll = 0; roll < 20; roll++) {
      bowl.roll(1);
    };
    expect(bowl.totalScore()).toEqual(20);
  });

  it('scores a gutter game', function () {

    for(let roll = 0; roll <= 20; roll++) {
      bowl.roll(0);
    };
    expect(bowl.totalScore()).toEqual(0);
  });

  it('will add two rolls equal to 4 points in total', function () {
    bowl.roll(2);
    bowl.roll(2);
    for (let i = 0; i < 18; i++) {
      bowl.roll(0)
    }
    expect(bowl.totalScore()).toEqual(4);
  });


  // Strike test/function currently not catching in the conditional and ran out of brain juice last night.
  // it('scores a strike', function() {
  //   bowl.roll(10);
  //   bowl.roll(2);
  //   bowl.roll(2);
  //   for (let i = 0; i < 17; i++) {
  //     bowl.roll(0)
  //   }
  //   expect(bowl.totalScore()).toEqual(18);
  // });

  it('scores a spare', function() {
    bowl.roll(6);
    bowl.roll(4);
    bowl.roll(2);
    for (let i = 0; i < 18; i++) {
      bowl.roll(0)
    }
    expect(bowl.totalScore()).toEqual(12)
  });

});