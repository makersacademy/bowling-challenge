var buttons = document.getElementsByClassName('btn-lg');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var pinsDown = this.innerHTML;
    game.roll(pinsDown);
  }
}
