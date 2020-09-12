$(document).ready(() => {
  let frameList = new FrameList();

  $("#counter").text("Rolls played: " + frameList.rollCounter);

  $("#rollForm").submit((e) => {
    e.preventDefault();

    let pins = $("#pins").val();

    frameList.roll(parseInt(pins));

    frameList.calc();
    console.log(frameList.score);

    $("#pins").val("");
    $("#counter").text("Rolls played: " + frameList.rollCounter);
  });

  $("#scoreBtn").click(() => {
    frameList.calc();
    console.log(frameList.score);
  });
});
