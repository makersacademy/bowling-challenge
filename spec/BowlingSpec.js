describe('Bowling', function() {
   var bowling;
   
   beforeEach(function() {
      bowling = new Bowling;
   });
   
   describe('#shoot', function() {
      it('allows the player to shoot', function() {
         expect((bowling.shoot() <= 10)).toBe(true);
      })
   });
  
   describe('#count', function() {
      it('counts the point for each shoot', function() {
         var last = bowling.shoot();
         expect(bowling.count()).toEqual("First Shot: " + last + " - Pins left: " + (bowling.pins - last));
      });
   })
   
   
});