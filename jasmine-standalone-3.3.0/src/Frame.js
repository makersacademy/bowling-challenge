// Stores no more than two scores and returns them in an array
function Frame () {
    this.throws = []
}

Frame.prototype.addScore = function (score) {
    if (this.throws.length === 2) {
        try {
            throw new Error('Cannot add third score to frame')
        }
        catch(error) {
            console.log(error)
        }
    }
    else { this.throws.push(score) }
}