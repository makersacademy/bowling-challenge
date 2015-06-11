describe('ScoreCardService', function() {
  beforeEach(module('BowlingCalc'));
  
  var ScoreCard;

  beforeEach(inject(function(_ScoreCard_) {
    ScoreCard = _ScoreCard_;
  }));

  describe('Calculating Bonuses', function(){

    it('calculates the score for multiple frames if there is no strike or spare', function(){
      var frames = [{'score':6}, {'score':3}, {'score':8}]
      var scoreCard = new ScoreCard(3, frames)
      expect(scoreCard.score).toEqual(17)
    });

    it('calculates the score for multiple frames if there is a spare', function(){
      var frames = [{'score':10, 'spare':true}, {'score':3, 'rolls':[2]}, {'score':8}]
      var scoreCard = new ScoreCard(3, frames)
      expect(scoreCard.score).toEqual(23)
    });

    it('calculates the score for multiple frames if there is a strike', function(){
      var frames = [{'score':10, 'strike':true}, {'score':5, 'rolls':[3,2]}, {'score':9}]
      var scoreCard = new ScoreCard(3, frames)
      expect(scoreCard.score).toEqual(29)
    });
  });

  describe('Calculating full games', function(){

    it('calculates the score for an all spares game', function(){
      var frames = [{'score':10, 'spare':true}, {'score':10, 'spare':true, 'rolls':[9]}, 
                    {'score':10, 'spare':true, 'rolls':[8]}, {'score':10, 'spare':true, 'rolls':[7]},
                    {'score':10, 'spare':true, 'rolls':[6]}, {'score':10, 'spare':true, 'rolls':[5]},
                    {'score':10, 'spare':true, 'rolls':[4]}, {'score':10, 'spare':true, 'rolls':[3]},
                    {'score':10, 'spare':true, 'rolls':[2]}, {'score':10, 'spare':true, 'rolls':[1]}, 
                    {'score':10, 'rolls':[5]}]
      var scoreCard = new ScoreCard(10, frames)
      expect(scoreCard.score).toEqual(150)
    })

    it('calculates the score for a perfect game', function(){
      var frames = [{'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[9]}, 
                    {'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[10]},
                    {'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[10]},
                    {'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[10]},
                    {'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[10]}, 
                    {'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'strike':true, 'rolls':[10]}]

      var scoreCard = new ScoreCard(10, frames)
      expect(scoreCard.score).toEqual(300)
    })

    it('calculates the score for a mix of strikes spares and normal rolls',function(){
      var frames = [{'score':10, 'strike':true, 'rolls':[10]}, {'score':10, 'spare':true,  'rolls':[9,1]}, 
                    {'score':7, 'rolls':[3,4]}, {'score':8, 'rolls':[4,4]},
                    {'score':10, 'spare':true, 'rolls':[5,5]}, {'score':10, 'strike':true, 'rolls':[10]},
                    {'score':4, 'rolls':[0,4]}, {'score':9,'rolls':[9,0]},
                    {'score':10, 'spare':true, 'rolls':[3,7]}, {'score':8, 'rolls':[3,5]}]

      var scoreCard = new ScoreCard(10, frames)
      expect(scoreCard.score).toEqual(116)
    });

  });
});