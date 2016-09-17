/* jshint undef: true, unused: true */
/* globals Frame */
/*jshint -W117 */


describe ("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('starting a frame', function(){
    it('starts with first bowl equal to null', function() {
      expect(frame.firstBowl).toEqual(null);
    });

    it('starts with second bowl equal to null', function() {
      expect(frame.secondBowl).toEqual(null);
    });

    it('allows a player to take first bowl', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.bowl();
      expect(frame.firstBowl).toEqual(3);
    });

    it('allows a player to take second bowl', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.bowl();
      console.log(frame);
      frame.bowl();
      console.log(frame);
      expect(frame.secondBowl).toEqual(2);
    });

    it('will not allow second bowl if first is a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.bowl();
      expect(frame.canBowl()).toEqual(false);
    });

  })

});
