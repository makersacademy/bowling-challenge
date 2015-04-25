describe("FEATURE: Full Games online!", function() {

    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('app.html');
    });

  it("correctly scores sample game", function() {

    $('#1').click();
    $('#pins_hit').val(1);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#2').click();
    $('#pins_hit').val(4);
    $('#confirm').click();
    $('#pins_hit').val(5);
    $('#confirm').click();

    $('#3').click();
    $('#pins_hit').val(6);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#4').click();
    $('#pins_hit').val(5);
    $('#confirm').click();
    $('#pins_hit').val(5);
    $('#confirm').click();

    $('#5').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#6').click();
    $('#pins_hit').val(0);
    $('#confirm').click();
    $('#pins_hit').val(1);
    $('#confirm').click();

    $('#7').click();
    $('#pins_hit').val(7);
    $('#confirm').click();
    $('#pins_hit').val(3);
    $('#confirm').click();

    $('#8').click();
    $('#pins_hit').val(6);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#9').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#10').click();
    $('#pins_hit').val(2);
    $('#confirm').click();
    $('#pins_hit').val(8);
    $('#confirm').click();

    $('#bonus').click();
    $('#pins_hit').val(6);
    $('#confirm').click();

    $('#calculate_score').click();

    expect($('#score').text()).toEqual('133');
    });

  it("correctly scores perfect game", function() {

    $('#1').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#2').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#3').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#4').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#5').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#6').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#7').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#8').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#9').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#10').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#bonus').click();
    $('#pins_hit').val(10);
    $('#confirm').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#calculate_score').click();

    expect($('#score').text()).toEqual('PERFECT GAME!');
    });

  it("correctly scores all spares game", function() {

    $('#1').click();
    $('#pins_hit').val(1);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#2').click();
    $('#pins_hit').val(4);
    $('#confirm').click();
    $('#pins_hit').val(5);
    $('#confirm').click();

    $('#3').click();
    $('#pins_hit').val(6);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#4').click();
    $('#pins_hit').val(5);
    $('#confirm').click();
    $('#pins_hit').val(5);
    $('#confirm').click();

    $('#5').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#6').click();
    $('#pins_hit').val(0);
    $('#confirm').click();
    $('#pins_hit').val(1);
    $('#confirm').click();

    $('#7').click();
    $('#pins_hit').val(7);
    $('#confirm').click();
    $('#pins_hit').val(3);
    $('#confirm').click();

    $('#8').click();
    $('#pins_hit').val(6);
    $('#confirm').click();
    $('#pins_hit').val(4);
    $('#confirm').click();

    $('#9').click();
    $('#pins_hit').val(10);
    $('#confirm').click();

    $('#10').click();
    $('#pins_hit').val(2);
    $('#confirm').click();
    $('#pins_hit').val(8);
    $('#confirm').click();

    $('#bonus').click();
    $('#pins_hit').val(6);
    $('#confirm').click();

    $('#calculate_score').click();

    expect($('#score').text()).toEqual('133');
    });

  });