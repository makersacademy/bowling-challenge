xdescribe('frameIdentifier', function() {
  describe('identifies a frame',function() {
    it('of two values without strike or spare', function() {

      expect(frameIdentifier.getFrame([1,2])).toEqual([1,2])
    });

    it('when three values passed with strike', function() {

      expect(frameIdentifier.getFrame([10,1,4])).toEqual([10])
    });
      
  });
});