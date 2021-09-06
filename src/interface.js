"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const updateScorecard = () => {
    document.querySelector("#scorecard").innerText = game.scorecard();
  };

  const game = new Game();
  updateScorecard();

  document.querySelector("#zero").addEventListener("click", () => {
    game.bowl(0);
    updateScorecard();
  });

  document.querySelector("#one").addEventListener("click", () => {
    game.bowl(1);
    updateScorecard();
  });

  document.querySelector("#two").addEventListener("click", () => {
    game.bowl(2);
    updateScorecard();
  });

  document.querySelector("#three").addEventListener("click", () => {
    game.bowl(3);
    updateScorecard();
  });

  document.querySelector("#four").addEventListener("click", () => {
    game.bowl(4);
    updateScorecard();
  });

  document.querySelector("#five").addEventListener("click", () => {
    game.bowl(5);
    updateScorecard();
  });

  document.querySelector("#six").addEventListener("click", () => {
    game.bowl(6);
    updateScorecard();
  });

  document.querySelector("#seven").addEventListener("click", () => {
    game.bowl(7);
    updateScorecard();
  });

  document.querySelector("#eight").addEventListener("click", () => {
    game.bowl(8);
    updateScorecard();
  });

  document.querySelector("#nine").addEventListener("click", () => {
    game.bowl(9);
    updateScorecard();
  });

  document.querySelector("#strike").addEventListener("click", () => {
    game.bowl(10);
    updateScorecard();
  });
});
