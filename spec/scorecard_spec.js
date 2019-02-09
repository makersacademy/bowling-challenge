describe('scorecard', function(){

  var card;
  var number_one;
  var number_two;

  beforeEach(function(){
    card = new Scorecard();
    number_one = 5;
    number_two = 4;
  });

  it('records a number of pins knocked in the first roll', function(){
    card.record_first(number_one);
    expect(card.pins_knocked_one).toEqual(number_one);
  });

  it('records a number of pins knocked in the second roll', function(){
    card.record_second(number_two);
    expect(card.pins_knocked_two).toEqual(number_two);
  });

  it('displays a score from a frame', function(){
    card.record_first(number_one);
    card.record_second(number_two);
    expect(card.frame_score_display()).toEqual(number_one + number_two);
  });

  it('displays a total score at the end of the game', function(){
    for (var i of Array(10).keys()){
      card.record_first(1);
      card.record_second(2);
      card.frame_score_display();
    };
    expect(card.total_score_display()).toEqual(30);
  });

  it('clears the scorecard', function(){
    for (var i of Array(10).keys()){
      card.record_first(1);
      card.record_second(2);
      card.frame_score_display();
    };
    card.clear();
    expect(card.total_score_display()).toEqual(0);
  });









});
