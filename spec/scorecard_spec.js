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
    expect(card.total_score_display()).toContain([]);
  });

  it('displays a Gutter Game when no pins were hit', function(){
    for (var i of Array(10).keys()){
      card.record_first(0);
      card.record_second(0);
      card.frame_score_display();
    };
    expect(card.total_score_display()).toMatch('Gutter Game');
  });

  it('ends a frame after a strike',function(){
    card.record_first(10)
    card.strike();
    expect(card.pins_knocked_two).toEqual(0);
  });

  it('calculates strike bonus points correctly', function(){
    card.bonus = [];
    card.record_first(10);
    card.strike();
    card.frame_score_display();
    card.record_first(2);
    card.record_second(3);
    card.frame_score_display();
    card.strike_bonus();
    expect(card.strike_bonus()).toEqual(5);
  });

  it('adds bonus points after a strike', function(){
    card.bonus = [];
    card.record_first(10);
    card.strike();
    card.frame_score_display();
    card.record_first(2);
    card.record_second(3);
    card.frame_score_display();
    card.strike_bonus();
    expect(card.total_score_array.reduce((a,b) => a + b, 0)).toEqual(20)

  });

  it('makes a way for the new strike bonus to be calculated', function(){
    card.st_bonus = [5];
    card.clear_bonus()
    expect(card.st_bonus).toEqual([]);
  });

  it('calculates spare bonus points correctly', function(){
    card.sp_bonus = [];
    card.record_first(5);
    card.record_second(5);
    card.frame_score_display();
    card.record_first(2);
    card.record_second(3);
    card.frame_score_display();
    card.spare_bonus();
    expect(card.spare_bonus()).toEqual(2);
  });

  it('makes a way for the new spare bonus to be calculated', function(){
    card.sp_bonus = [5];
    card.clear_bonus()
    expect(card.sp_bonus).toEqual([]);
  });



});
