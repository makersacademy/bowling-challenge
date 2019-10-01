function Frame() {
    this.score = []
}

Frame.prototype.add = function (number) {
    if (!(0 <= number && number <= 10)) return null
    this.score.push(number)
    if (number == 10) {
        return this.score.push(0)
    }
}
