$(document).ready(() => {
  let players;
  $("#confirm").css("visibility", "hidden");

  $("#playersNumber").submit((e) => {
    e.preventDefault();
    players = $("#players").val();
    for (let i = 0; i < players; i++) {
      addNames(i);
    }
    $("#players").val("");
    $("#confirm").css("visibility", "visible");
  });

  $("#confirm").click(async () => {
    let data = {};

    for (let i = 0; i < players; i++) {
      data[`player_${i}`] = $(`#player-${i}`).val();
    }
    localStorage.setItem("userData", JSON.stringify(data));
  });
});

let addNames = (index) => {
  let div = document.getElementById("PlayersName");

  let name = document.createElement("input");
  Object.assign(name, {
    id: `player-${index}`,
    placeholder: `Player ${index + 1} name`,
    type: "text",
  });

  div.prepend(name);
};
