'use strict';

describe('player', function(){
  var player;
  var blankScoreCard
  var blankScore

  beforeEach(function(){
    player = new Player();
    blankScoreCard = player.scoreCard;
    blankScore = player.score;
  })

  describe('#initialize', function() {
    it ('player initializes with name = Player', function(){
      expect(player.name).toEqual("Player");
    })

    it ('player initializes with roll = 0', function(){
      expect(player.scoreCard).toEqual(blankScoreCard);
    })

    it ('player initializes with roll = 0', function(){
      expect(player.score).toEqual(blankScore);
    })

    it ('player initializes with roll = 0', function(){
      expect(player.roll).toEqual(0);
    })
  })

  describe('#displayScoreCard', function() {
    it ('displays plaers score card', function(){
      expect(player.displayScoreCard()).toEqual(blankScoreCard)
    })
  })
})
