describe('LastFrame', function () {
  var lastFrame;

  beforeEach(function () {
    lastFrame = new LastFrame();
  });

  describe('#new', function(){

    it('should create an instance of LastFrame', function(){
      expect(lastFrame instanceof LastFrame).toBe(true);
    });

  });

  describe('#getRolls', function () {

    it('has a maxium of three rolls', function () {
      expect(lastFrame.getRolls().length).toEqual(3);
      expect(lastFrame.getRolls().every(roll => roll instanceof Roll)).toBe(true);
    });

  });

});
