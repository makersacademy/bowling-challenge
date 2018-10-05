describe ('Bowling', function () {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling() ;
  });

  describe('#play', function() {

    it ('bowls a ball', function () {
      expect(bowling.play(5)).toEqual(5);
    });

    // it ('sums the score so far', function () {
    //   bowling.play(6);
    //   expect(bowling.play(3)).to
    // });

  });

});
