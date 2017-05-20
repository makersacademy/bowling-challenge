describe('AuthenticateRoll', function() {
  var authRoll = new AuthenticateRoll(2)

  it('is given a score when instanciated', function() {
    expect(authRoll.score).toEqual(2);
  })

  describe('#checkScore', function() {
    it('returns true if 0 < score <= 10', function() {
      expect(authRoll.checkScore()).toEqual(true);
    })

    it('returns false if score > 10 or < 0', function() {
      var authRoll = new AuthenticateRoll(-3);
      console.log(authRoll.score);
      expect(authRoll.checkScore()).toEqual(false);
    })
  })
})
