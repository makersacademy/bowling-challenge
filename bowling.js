function Bowling(rolls) {
    var pins = 1;
    return rolls.reduce((score, extra, roll, points) => {
      if(pins >= 10) return score + extra;
      if(extra === 10) { pins++; return score + extra + points[roll+1] + points[roll+2]; }
      if(pins % 1 !== 0) { pins = Math.floor(++pins); if(extra + points[roll-1] === 10) return score + extra + points[roll+1]; return score + extra; }
      pins += .5; return score + extra; }, 0);
  }

module.exports = Bowling;
