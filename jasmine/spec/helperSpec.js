describe('helpful functions', function() {
  describe('#arrayWithItems', function() {
    it('returns an Array with x amount of given items', function() {
      expect(arrayWithItems(3, 'test')).toEqual(['test', 'test', 'test'])
      expect(arrayWithItems(2, 'hello')).toEqual(['hello', 'hello'])
    })
  })
})
