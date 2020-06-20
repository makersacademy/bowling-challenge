describe('score', function() {
  var score1
  var frame1
  var frame2
  var frame3

  beforeEach( function (){
    frame1 = jasmine.createSpyObj('frame1', ['roll1result', 'roll2result', 'baseScore']);
    frame1.roll1result.and.callFake(function() {
      return (2);
    });
    frame1.roll2result.and.callFake(function() {
      return (5);
    });
    score1 = new Score(frame1)
  })

  describe('no spare/strike game', function() {
    it('should return the base score for the round', function(){
      expect(score1.score()).toEqual(7);
    });
  })

  describe('spare', function() {
    it('should return the score for the round', function(){
      frame1 = jasmine.createSpyObj('frame1', ['roll1result', 'baseScore']);
      frame2 = jasmine.createSpyObj('frame2', ['roll1result']);
      frame1.roll1result.and.callFake(function() {
        return (2);
      });
      frame1.baseScore.and.callFake(function() {
        return (2 + 8);
      });
      frame2.roll1result.and.callFake(function() {
        return (5);
      })
      score1 = new Score(frame1, frame2)
      expect(score1.score()).toEqual(15);
    });
  })

  describe('strike, followed by not strike', function() {
    it('should return the score for the round', function(){
      frame1 = jasmine.createSpyObj('frame1', ['roll1result']);
      frame2 = jasmine.createSpyObj('frame2', ['roll1result', 'roll2result', 'baseScore']);
      frame3 = jasmine.createSpyObj('frame1', ['roll1result']);
      frame1.roll1result.and.callFake(function() {
        return (10);
      });
      frame2.roll1result.and.callFake(function() {
        return (10);
      })
      frame3.roll1result.and.callFake(function() {
        return(6);
      })
      score1 = new Score(frame1, frame2, frame3)
      expect(score1.score()).toEqual(26);
    });
  })
  describe('strike, followed by not strike', function() {
    it('should return the score for the round', function(){
      frame1 = jasmine.createSpyObj('frame1', ['roll1result']);
      frame2 = jasmine.createSpyObj('frame2', ['roll1result', 'roll2result', 'baseScore']);
      frame1.roll1result.and.callFake(function() {
        return (10);
      });
      frame2.roll1result.and.callFake(function() {
        return (5);
      })
      frame2.baseScore.and.callFake(function() {
        return(8);
      })
      score1 = new Score(frame1, frame2)
      expect(score1.score()).toEqual(18);
    });
  })
})
