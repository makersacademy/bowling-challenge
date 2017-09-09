describe('SumScore', function() {
  var sumScore = new SumScore

  it('begins a sum with nextBonus of 0', function() {
    expect(sumScore.nextBonus).toEqual(0);
  })

  describe('#setBonus', function() {
    it('sets nextBonus to Bonus', function() {
      sumScore.setBonus(2);
      expect(sumScore.nextBonus).toEqual(2);
    })
  })

  describe('#addScore', function() {
    it('returns the sum of roll-1 and roll-2 if nextBonus is 0', function() {
      sumScore.nextBonus = 0;
      expect(sumScore.addScore([5, 5])).toEqual(10);
    })

    it('returns the sum of 2*roll-1 + 1*roll2 if nextBonus is 1', function() {
      sumScore.nextBonus = 1;
      expect(sumScore.addScore([5, 5])).toEqual(15);
    })

    it('returns the sum of 2*roll-1 + 2*roll2 if nextBonus is 2', function() {
      sumScore.nextBonus = 2;
      expect(sumScore.addScore([5, 5])).toEqual(20);
    })
  })
})
