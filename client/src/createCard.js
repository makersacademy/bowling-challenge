let createCard = (index) => {
  let mine = document.getElementById("mine");

  let outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", `outerDiv-${index}`);
  mine.appendChild(outerDiv);

  let title = document.createElement("h1");
  title.setAttribute("id", `h1_test-${index}`);
  title.innerHTML = "Score card";
  outerDiv.appendChild(title);

  let div_2 = document.createElement("div");
  outerDiv.appendChild(div_2);

  let counter = document.createElement("h3");
  counter.setAttribute("id", `counter-${index}`);
  div_2.appendChild(counter);

  let display = document.createElement("h3");
  display.innerHTML = "Game Display:";
  div_2.appendChild(display);

  let game = document.createElement("h3");
  game.setAttribute("id", `game-${index}`);
  div_2.appendChild(game);

  let rollForm = document.createElement("form");
  rollForm.setAttribute("id", `rollForm-${index}`);
  div_2.appendChild(rollForm);

  let pins = document.createElement("input");
  Object.assign(pins, {
    id: `pins-${index}`,
    placeholder: "Number of pins",
    type: "number",
  });

  rollForm.appendChild(pins);
  let btn = document.createElement("input");
  Object.assign(btn, {
    className: "btn",
    value: "Add",
    type: "submit",
  });
  rollForm.appendChild(btn);

  let score = document.createElement("h2");
  score.setAttribute("id", `score-${index}`);
  div_2.appendChild(score);

  cardInterface(index);
};

$(document).ready(() => {
  createCard(1);
  createCard(2);
});
