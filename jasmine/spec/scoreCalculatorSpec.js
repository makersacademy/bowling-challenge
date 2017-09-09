describe('Calculator', function(){

  beforeEach(function(){
    calculator = new Calculator
    bowlingScore = [
      {frame: [3,2], score:0}
    ]
  });

  describe('calculator functionality', function(){
    it('has a score of zero to start with', function(){
      expect(calculator.score).toEqual(0)
    });

    it('scores frames by adding cones hit', function(){
      bowlingScore.push({frame: [8, 1], score:0})
      calculator.scoreFrame(bowlingScore)
      expect(bowlingScore[0].score).toEqual(5)
      expect(bowlingScore[1].score).toEqual(9)
      expect(calculator.score).toEqual(14)
    });

    it('scores a strike by adding the next frame and 10', function(){
      bowlingScore.push({frame: [10], score:0}, {frame: [5, 3], score:0})
      calculator.scoreFrame(bowlingScore)
      expect(calculator.score).toEqual(31)
    });
  });

  describe('scoreCheck', function(){
    it('returns a stirke or spare depending on frame type', function(){
      bowlingScore.push({frame: [10], score:0})
      expect(scoreCheck(bowlingScore[1].frame)).toEqual('strike')
    });
  });
});
