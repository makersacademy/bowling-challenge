describe("WEB APP", function() {

    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('app.html');
    });

   it("displays Hello world", function() {
    expect($('#welcome').text()).toEqual('Score Your Own!');
  });

   it("allows user to enter bowls for a frame", function() {
      $('#1').click();
      $('#pins_hit').val(1);
      $('#confirm').click();
      $('#pins_hit').val(1);
      $('#confirm').click();
      expect(frames[0].knockedDown()).toBe(2);
   });

   it("allows user to click on a frame and set values for that frame", function() {

      $('#2').click();
      $('#pins_hit').val(2);
      $('#confirm').click();
      $('#pins_hit').val(2);
      $('#confirm').click();

      $('#4').click();
      $('#pins_hit').val(4);
      $('#confirm').click();

      $('#9').click();
      $('#pins_hit').val(9);
      $('#confirm').click();

      $('#6').click();
      $('#pins_hit').val(6);
      $('#confirm').click();

      expect(function() {
        frames[0].knockedDown()
      }).toThrow();
      expect(frames[1].knockedDown()).toBe(4);
      expect(frames[3].knockedDown()).toBe(4);
      expect(frames[8].knockedDown()).toBe(9);
      expect(frames[5].knockedDown()).toBe(6);
   });

   it("user can see values they have set for each frame", function() {

      $('#2').click();
      $('#pins_hit').val(2);
      $('#confirm').click();
      $('#pins_hit').val(4);
      $('#confirm').click();

      expect($("#2 > .first_roll").text()).toEqual("2");
      expect($("#2 > .second_roll").text()).toEqual("4");
      expect($("#2 > .total").text()).toEqual("6");
   });

   it("brings bonus frame into view if get spare in final round", function() {

      expect($('#bonus_one')).toBeHidden();
      $('#10').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect($('#bonus_one')).toBeVisible();

   });

   it("allows user to add only bonus roll if spare", function() {

      $('#10').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect($('#bonus_one')).toBeVisible();
      $('#bonus_one').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect(bonus_one.bowled).toEqual([5]);
      $('#bonus_one').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect(bonus_one.bowled).toEqual([5]);
   });

   it("displays total and value of bonus roll 1", function() {

      $('#10').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      $('#bonus_one').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect($("#bonus_one > .first_roll").text()).toEqual("5");
      expect($("#bonus_one > .total").text()).toEqual("5");
});

   it("allows user to add two bonus roll if roll strike in frame 10", function() {

      $('#10').click();
      $('#pins_hit').val(10);
      $('#confirm').click();
      expect($('#bonus_one')).toBeVisible();
      $('#bonus_one').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect(bonus_one.bowled).toEqual([5]);
      $('#bonus_one').click();
      $('#pins_hit').val(5);
      $('#confirm').click();
      expect(bonus_one.bowled).toEqual([5, 5]);
      expect($("#bonus_one > .first_roll").text()).toEqual("5");
      expect($("#bonus_one > .second_roll").text()).toEqual("5");
      expect($("#bonus_one > .total").text()).toEqual("10");
   });

   });