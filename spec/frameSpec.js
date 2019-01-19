describe('Frame', function(){
  describe('Feature - Gutter Game', function(){

    var frame;
    //var bowl;

    beforeEach( () => {
      frame = new Frame(6);
      bowl = jasmine.createSpy('roll')
    });

    it('Make a new instance of Frame', function(){
      expect(frame instanceof Frame).toBeTruthy();
    });

    it('Starts with first bowl score', function(){
      expect(frame.bowls).toEqual([6]);
    });

    it('Adds a second bowl to the frame', function(){
      frame.addBowl(3);
      expect(frame.bowls).toEqual([6, 3]);
    });

    it('Returns the total score for the frame', function(){
      frame.addBowl(3);
      expect(frame.frameScore).toEqual(9);
    });


  })
})
