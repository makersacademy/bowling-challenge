describe('Roll', function(){

  it('returns the number of pins entered', function(){
    var roll = new Roll(7);
    expect(roll.output()).toEqual([7]);
  });

  describe('when there is a strike', function(){

    it('returns the number of pins and a strike indicator', function(){
      var roll = new Roll(10);
      expect(roll.output()).toEqual([10, 'x'])
    });

  });

});