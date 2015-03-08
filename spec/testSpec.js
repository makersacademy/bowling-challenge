describe('tenPin', function() {

  beforeEach(function(){
    tenP = new tenPin;
    frame = new Frame();

  });

   it('is less than 10 it will set strike to false', function() {
      spyOn(frame, 'rollOne').and.returnValue(3)
      tenP.frameFirstRoll(frame);
      expect(tenP.isStrike).toBe(false);
    });

 });