function Frame(frames = []){
  this.frames = frames;
}

for (i = 0; i < 10; i++) {
  this.frames.push(Game(1, i + 1));
}
