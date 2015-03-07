describe('Pluralizing', function() {

  it('pluralizes words with a standard plural', function() {
    expect(pluralize('stag')).toEqual('stags');
  });

  describe('when a word already ends with s', function() {

    it('cross -> crosses', function() {
      expect(pluralize('cross')).toEqual('crosses');
    });
  });

  describe('when a word has a non-standard plural', function() {

    it('goose -> geese', function() {
      expect(pluralize('Goose')).toEqual('Geese');
    });

    it('moose -> moose', function() {
      expect(pluralize('Moose')).toEqual('Moose');
    });
  });
});
