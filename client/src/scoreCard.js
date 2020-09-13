let interface = (index) => {
  let frameList = new FrameList();

  $(`#counter-${index}`).text("Rolls played: " + frameList.rollCounter);
  $(`#game-${index}`).text("------- --------");
  $(`#score-${index}`).text("Score: " + frameList.total());

  $(`#rollForm-${index}`).submit((e) => {
    e.preventDefault();
    let pins = $(`#pins-${index}`).val();
    frameList.roll(parseInt(pins));
    frameList.calc();

    refreshPage();
    displayScore();
  });

  let refreshPage = () => {
    $(`#score-${index}`).text("Score: " + frameList.total());
    $(`#pins-${index}`).val("");
    $(`#counter-${index}`).text("Rolls played: " + frameList.rollCounter);
  };

  let displayScore = () => {
    $(`#game-${index}`).text(frameList.score.join(" - "));
    $(`#game-${index}`)
      .css({ top: "-8em", opacity: "20%", "font-size": "0.1em" })
      .animate({ top: "0", opacity: "100%", "font-size": "1.3em" }, 700);
  };
};
