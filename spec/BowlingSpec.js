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
         var output = [("Shot: " + last + " - Pins left: " + (bowling.pins - last)), "Strike!"]
         expect(output).toContain(bowling.count());
      });
      
      it('can recognise a strike', function() {
         bowling.fakeShoot(10);
         expect(bowling.count()).toEqual('Strike!')
      })
   })
   
   describe('#setPins', function() {
      it('reset number of pins after 2 shots', function() {
         for (var i = 0; i < 2; i++) {
            bowling.fakeShoot(3);
         }
         expect(bowling.pins).toEqual(10);
      });
   });
   
   describe('#switchShoot', function() {
      it('tracks shoots sequence',function() {
         bowling.shoot();
         expect(bowling.firstShot).toEqual(bowling.lastShot);
      });
   });
   
   describe('#getScore', function() {
      it('reads the partial score', function() {
         bowling.fakeShoot(3);
         bowling.fakeShoot(4);
         expect(bowling.getScore()).toEqual(7);
      });
   });
   
   
   
});