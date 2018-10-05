describe("Bowling", function(){

 it("responds to a roll method", function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(2)
   expect(bowling.frame_score()).toEqual([5,2])
 });

 it("counts the number of rounds",function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(2)
   expect(bowling.frame_number()).toEqual(1)
 });

 it("counts the number of rounds properly when strike", function(){
   var bowling = new Bowling;
   bowling.roll(10)
   expect(bowling.frame_number()).toEqual(1)
 });

});
