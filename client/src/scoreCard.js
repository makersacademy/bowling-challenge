$(document).ready(() => {
  let frameList = new FrameList();

  $("#counter").text("Rolls played: " + frameList.rollCounter);
  $("#game").text("------- --------");
  $("#score").text("Score: " + frameList.total());

  $("#rollForm").submit((e) => {
    e.preventDefault();
    let pins = $("#pins").val();
    frameList.roll(parseInt(pins));
    frameList.calc();

    refreshPage();
    displayScore();
  });

  let refreshPage = () => {
    $("#score").text("Score: " + frameList.total());
    $("#pins").val("");
    $("#counter").text("Rolls played: " + frameList.rollCounter);
  };

  let displayScore = () => {
    $("#game").text(frameList.score.join(" - "));
    $("#game")
      .css({ top: "-8em", opacity: "20%", "font-size": "0.1em" })
      .animate({ top: "0", opacity: "100%", "font-size": "1.3em" }, 700);
  };
});
