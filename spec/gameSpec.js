describe('Game', function(){

  it('returns a frame with the correct value for normal rolls', function(){
    roll1 = jasmine.createSpyObj("Roll", ["output"]);
    roll2 = jasmine.createSpyObj("Roll", ["output"]);

    roll1.output.and.callFake(function() {return [4]} );
    roll2.output.and.callFake(function() {return [3]} );

    inputArray = [];
    inputArray.push(roll1,roll2);
    console.log(inputArray);
    var game = new Game(inputArray);
  });
});