function Game() {
    this.frames = [];

    for (i = 0; i < 10; i++) {
        this.frames.push([0, 0]);
        console.log(this.frames);
    }
}