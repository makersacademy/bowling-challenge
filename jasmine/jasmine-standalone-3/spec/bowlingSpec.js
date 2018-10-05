describe ('Bowling', function () {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling() ;
  });

  it ('bowls a ball', function () {
    // bowling.play(5)
    expect(bowling.play(5)).toEqual(5);
  });

});
