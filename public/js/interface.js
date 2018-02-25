const frame = new Frame();

$(document).ready(() => {
  const pins = $('#pins');
  pins.text(frame.pins);

  // Create one button per number and clicking is a closure to Frame-Roll
});
