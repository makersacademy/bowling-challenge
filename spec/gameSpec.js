    describe('totalScore', function() {
       it('returns accumulatedScore from last element in score.frames', function() {
            expect(score.total()).toBe(5);
        }); 
    });

Score.prototype.total = function() {
    return last(this.frames).accumulatedScore;
}
