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

      console.log(frames);

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

      console.log(frames);

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


});