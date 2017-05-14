beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});


// it("raises an error if more than 20 balls are bowled", function() {
//   expect(function(){ fullgame(); }).toThrowError("You cannot bowl more than 20 balls per game");
// });
