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

    $("#game").text(frameList.score.join(" - "));
    $("#score").text("Score: " + frameList.total());
    $("#pins").val("");
    $("#counter").text("Rolls played: " + frameList.rollCounter);
  });
});
