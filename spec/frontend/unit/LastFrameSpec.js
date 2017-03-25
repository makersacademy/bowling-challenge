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

  // describe('#rollsLeft', function () {
  //   it('two rolls left if first roll is a strike', function () {
  //     lastFrame.play(10);
  //     expect(lastFrame.rollsLeft()).toEqual(2);
  //   });
  //
  //   it('one roll left if first two rolls resulted in a spare', function () {
  //     lastFrame.play(4);
  //     lastFrame.play(6);
  //     expect(lastFrame.rollsLeft()).toEqual(1);
  //   });
  // });

});
