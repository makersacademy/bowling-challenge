// beforeEach(function () {
//   jasmine.addMatchers({
//     toBePlaying: function () {
//       return {
//         compare: function (actual, expected) {
//           var player = actual;
//
//           return {
//             pass: player.currentlyPlayingSong === expected && player.isPlaying
//           };
//         }
//       };
//     }
//   });
// });
function throwStrike(frame){
  frame._firstBall = 10;
}

function throwSpare(frame){
  frame._firstBall = 4;
  frame._secondBall = 6;
}

function throwNormal(frame){
  frame._firstBall = 2;
  frame._secondBall = 3;
}

function throwGutters(frame){
  frame._firstBall = 0;
  frame._secondBall = 0;
}
