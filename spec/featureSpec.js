describe('feature', function(){
  var scoring;
  beforeEach(function(){
    scoring1 = new Scoring(new Bowling());
  })

  it('gives the correct scores', function(){
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(8,2);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(0,10);
    scoring1.reset();
    scoring1.turn(0,9);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(8,2);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(10,0);
    scoring1.reset();
    scoring1.turn(10,0);
    expect(scoring1.scoreArray[0]).toEqual(20)
    expect(scoring1.scoreArray[1]).toEqual(20)
    expect(scoring1.scoreArray[2]).toEqual(20)
    expect(scoring1.scoreArray[3]).toEqual(20)
    expect(scoring1.scoreArray[4]).toEqual(10)
    expect(scoring1.scoreArray[5]).toEqual(9)
    expect(scoring1.scoreArray[6]).toEqual(28)
    expect(scoring1.scoreArray[7]).toEqual(20)
    expect(scoring1.scoreArray[8]).toEqual(20)
    expect(scoring1.scoreArray[9]).toEqual(30)
    console.log(scoring1.rollArray[8].isSpare())
    console.log(scoring1.scoreArray)
  })
});
