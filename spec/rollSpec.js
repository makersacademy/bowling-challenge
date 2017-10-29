describe('Roll', function () {
  
  var roll = new Roll;

  it('returns the number of pins knocked down each turn', function() {
    expect(roll.takeTurn(4)).toEqual(4)
  })
})