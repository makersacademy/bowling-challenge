describe('scorecard', function(){

  var card;
  var number;

  beforeEach(function(){
    card = new Scorecard();
    number = 5;
  });

  it('records a number of pins knocked in the first roll', function(){
    card.record_first(number);
    expect(card.pins_knocked_one).toEqual(number);
  });

  it('records a number of pins knocked in the second roll', function(){
    card.record_second(number);
    expect(card.pins_knocked_two).toEqual(number);
  });










});
