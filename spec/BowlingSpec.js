describe('Bowling', function () {

  let bowl;

  beforeEach(function () {
    bowl = new Bowling();
  });

  it('score returns 0', function () {
    bowl.roll(0)
    expect(bowl.getCurrentRollScore()).toEqual([0]);
  });

  it('scores 20 when only 1s are rolled', function () {
    for (let roll = 0; roll < 20; roll++) {
      bowl.roll(1);
    };
    expect(bowl.totalScore()).toEqual(20);
  });
  // THIS METHOD NEEDS THE TOTAL METHOD (AT THE MOMENT IT RETURNS AN ARRAY OF 20 "0'S")
  // it('scores a gutter game', function () {

  //   for(let roll = 0; roll <= 20; roll++) {
  //     bowl.roll(0);
  //   };
  //   expect(bowl.getCurrentRollScore()).toEqual([0]);
  // });

});