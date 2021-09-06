class FramesHtml {
  _doNumber(frame, fEl) {
    this._pushAttr(fEl, "framenumber", frame.frameNumber);
  }

  _doRoll(frame, fEl, rollNumber) {
    let pins = frame.frameScore[rollNumber - 1];
    if (pins === undefined) {
      this._pushAttr(fEl, "roll" + rollNumber, "");
    } else {
      if (rollNumber === 1 && pins === 10)
        this._pushAttr(fEl, "rollmess" + rollNumber, "  Strike");
      if (rollNumber === 2 && frame.points("score") === 10)
        this._pushAttr(fEl, "rollmess" + rollNumber, "  Spare");
      this._pushAttr(fEl, "roll" + rollNumber, pins + " .. ");
    }
  }

  _doScore(frame, fEl, totalScore) {
    if (frame.frameEnded()) {
      this._pushAttr(fEl, "framebonus", frame.points("bonus"));
      this._pushAttr(fEl, "score", totalScore);
      this._pushAttr(fEl, "scorebefore", totalScore - frame.points("bonus"));
    }
  }

  _doEndGame(totalScore) {
    this._pushAttr(document, "gameended", totalScore);
  }

  _pushAttr(fEl, className, attrValue) {
    fEl
      .querySelector("." + className)
      .setAttribute("data-" + className, attrValue);
  }

  _getElement(frame) {
    let fEl = document.querySelector("#frame_" + frame.frameNumber);
    if (fEl === null)
      fEl = document
        .querySelector("#frames")
        .insertAdjacentElement(
          "beforeend",
          document.querySelector("#frame").cloneNode(true)
        );
    fEl.setAttribute("id", "frame_" + frame.frameNumber);
    return fEl;
  }
}
