describe ('Bowling', function (){
  var bowling;

  beforeEach(function () {
    bowling = new Bowling ();
  });

  it ("starts with a score of 0", function () {
    expect(bowling.score).toEqual(0);
  });
  it ("a strike counts for 10 points", function () {
    expect(bowling.strike).toEqual(10);
  });

  describe ('Play', function () {
    it ('pushes the current frame to the list', function () {
      bowling.play(10);
      expect(bowling.list).toContain([10, 10, 0, 0]);
    });
    it ('adds the frame\'s score to the game\'s score', function () {
      bowling.play(10);
      expect(bowling.score).toEqual(10);
    });
    it ('adds 1 game\'s counter', function () {
      bowling.play(10);
      expect(bowling.counter).toEqual(1);
    });
  });

  describe ('Strik', function () {
    it ('adds the strike\'s bonus to the frame\'s score', function () {
      bowling.play(10);
      bowling.play(5,3);
      bowling.play(3,3);
      expect(bowling.list[0][0]).toEqual(18);
    });
  });

  describe ('Doublestrike', function () {
    it ('adds the doublestrike\'s bonus to the frame\'s score', function () {
      bowling.play(10);
      bowling.play(10);
      bowling.play(3,3);
      expect(bowling.list[0][0]).toEqual(23);
    });
  });

  describe ('Spare', function () {
    it ('adds the spare\'s bonus to the frame\'s score', function () {
      bowling.play(5,5);
      bowling.play(3,6);
      bowling.play(3,3);
      expect(bowling.list[0][0]).toEqual(13);
    });
  });

  describe ('Calculate', function () {
    it ('calculate the right current\'s score', function () {
      bowling.play(5,5);
      bowling.play(3,6);
      bowling.play(3,3);
      expect(bowling.score).toEqual(28);
    });
  });

  describe ('scoreUpdate', function () {
    it ('updates the game\'s score with the bonuses', function () {
      bowling.play(10);
      bowling.play(10);
      bowling.play(3,3);
      expect(bowling.score).toEqual(39);
    });
  });

  describe ('perfect game', function () {
    it ('calculate the right score for a erfect game', function () {
      var times = 9; for(var i=0; i < times; i++){bowling.play(10);}
      bowling.play(10, 10, 10);
      expect(bowling.score).toEqual(300);
    });
  });
});
