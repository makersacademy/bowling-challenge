describe("Bowling", function(){

 it("calculates the score when not strike or spare", function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(2)
   expect(bowling.frame_score()).toEqual(7)
 });

 it("counts the number of rounds no strike",function(){
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
