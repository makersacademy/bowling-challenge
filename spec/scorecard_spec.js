describe('scorecard', function(){


  var card = new Scorecard();

  it('records a number of pins knocked', function(){
    expect(card.record()).toEqual(card.pins);
  });










});
