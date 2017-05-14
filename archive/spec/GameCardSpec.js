describe('GameCard', function(){

  var gameCard

  beforeEach(function(){
    gameCard = new GameCard();
  })

  describe('default state', function() {
    
    it('can hold a player name', function() {
      expect(gameCard.player).toEqual('')
    })

    it('has a complete blank scorecard', function() {
      expect(gameCard.frame1).toEqual([]);
      expect(gameCard.frame2).toEqual([]);
      expect(gameCard.frame3).toEqual([]);
      expect(gameCard.frame4).toEqual([]);
      expect(gameCard.frame5).toEqual([]);
      expect(gameCard.frame6).toEqual([]);
      expect(gameCard.frame7).toEqual([]);
      expect(gameCard.frame8).toEqual([]);
      expect(gameCard.frame9).toEqual([]);
      expect(gameCard.frame10).toEqual([]);
    })
  })
})
