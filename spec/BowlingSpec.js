describe('Bowling', function () {

  let bowl;

  beforeEach(function () {
    bowl = new Bowling();
  });

  it('score returns 0', function () {
    bowl.roll(0)
    expect(bowl.gameScore()).toEqual(0);
  });

  it('scores 20 when only 1s are rolled', function () {
    for (let roll = 0; roll < 20; roll++) {
      bowl.roll(1);
    };
    expect(bowl.gameScore()).toEqual(20);
  });

  it('scores a gutter game', function () {

    for(let roll = 0; roll <= 20; roll++) {
      bowl.roll(0);
    };
    expect(bowl.gameScore()).toEqual(0);
  });


  // it('scores a gutter game', function () {
  //   expect(bowl.bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  // });

  it('will add two rolls equal to 4 points in total', function() {
    bowl.roll(2);
    bowl.roll(2);
    expect(bowl.gameScore()).toEqual(4);
  });

  it('scores a strike', function() {
    bowl.roll(10);
    bowl.roll(2);
    bowl.roll(2);
    expect(bowl.gameScore()).toEqual(18);
  });

});