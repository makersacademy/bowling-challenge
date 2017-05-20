describe('Roll', function(){

});
beforeEach(function(){
  roll = new Roll();
});

it ('takes a random of up to 10 pins down, if index is 1', function(){
  roll.play(1);
  spyOn(roll, "play").and.returnValue(6);
  expect(roll.pins1).toEqual(6);
});


it ('takes a random of up to 10- first pins down, if index is 2', function(){
  roll.play(2);
  spyOn(roll, "play").and.returnValue(3);
  expect(roll.pins1).toEqual(3);
});
