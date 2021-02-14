$(document).ready(() => {
  let game = new Game();
  const lastRoll = () => {
    $("#last-roll").text("Last roll: " + game.rollsArray.slice(-1)[0]);
  };

  const rollsArray = () => {
    $("#rolls-array").text("All rolls: " + game.rollsArray);
  };

  $("#roll0").click(() => {
    game.roll(0);
    lastRoll();
    rollsArray();
  });

  $("#roll1").click(() => {
    game.roll(1);
    lastRoll();
    rollsArray();
  });

  $("#roll2").click(() => {
    game.roll(2);
    lastRoll();
    rollsArray();
  });

  $("#roll3").click(() => {
    game.roll(3);
    lastRoll();
    rollsArray();
  });

  $("#roll4").click(() => {
    game.roll(4);
    lastRoll();
    rollsArray();
  });

  $("#roll5").click(() => {
    game.roll(5);
    lastRoll();
    rollsArray();
  });

  $("#roll6").click(() => {
    game.roll(6);
    lastRoll();
    rollsArray();
  });

  $("#roll7").click(() => {
    game.roll(7);
    lastRoll();
    rollsArray();
  });

  $("#roll8").click(() => {
    game.roll(8);
    lastRoll();
    rollsArray();
  });

  $("#roll9").click(() => {
    game.roll(9);
    lastRoll();
    rollsArray();
  });

  $("#roll10").click(() => {
    game.roll(10);
    lastRoll();
    rollsArray();
  });
});
