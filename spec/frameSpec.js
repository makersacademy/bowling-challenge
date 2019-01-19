describe('Frame', function(){
  describe('Feature - Gutter Game', function(){

    var frame;
    var roll;

    beforeEach( () => {
      frame = new Frame();
      roll = jasmine.createSpy('roll')
    });

    it('Make a new instance of Frame', function(){
      expect(frame instanceof Frame).toBeTruthy();
    });

    it('Starts with first roll', function(){
      
    });

    it('Adds a second roll to the frame', function(){
      
    });

    it('Returns the total score for the frame', function(){
      
    });


  })
})
