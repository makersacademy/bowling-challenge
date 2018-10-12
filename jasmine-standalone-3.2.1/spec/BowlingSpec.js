describe("Bowling", function(){

 it("calculates the score of the frame when no strike or spare", function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(2)
   console.log(bowling._frames)
   console.log(bowling._frame_number)
   expect(bowling.total_score()).toEqual(7)
   expect(bowling.frame_score()).toEqual(7)
 });

 it("calculates the score of the frame when spare",function(){
   var bowling = new Bowling;
   bowling.roll(4)
   bowling.roll(6)
   bowling.roll(6)
   expect(bowling.total_score()).toEqual(16)
 });

 it("only calculates the score of frame", function(){
    var bowling = new Bowling;
    bowling.roll(4)
    bowling.roll(1)
    bowling.roll(1)
    expect(bowling.total_score(1)).toEqual(6)
 });

 it("counts the number of rounds no strike",function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(2)
   expect(bowling.frame_number()).toEqual(2)
 });

 it("counts the number of rounds properly when strike", function(){
   var bowling = new Bowling;
   bowling.roll(10)
   expect(bowling.frame_number()).toEqual(2)
 });

 it("counts the roll number", function(){
   var bowling = new Bowling;
   bowling.roll(5)
   bowling.roll(1)
   bowling.roll(5)
   expect(bowling.roll_number()).toEqual(2)
 });

 it("stops the game after 10 frames", function(){
   var bowling = new Bowling;
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(10)
   bowling.roll(5)
   expect(bowling.frame_number()).toEqual("Game over")
   expect(bowling.roll_number()).toEqual("Game over")
 });
});
