function Frame() {
    this.score = []
}

Frame.prototype.add = function (number) {
    this.score.push(number)
    if (number == 10) {
        return this.score.push(0)
    }
}
