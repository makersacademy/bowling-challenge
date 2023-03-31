const score = (user) => {
    let scores = user.map((array, i) => {
        if ((array[0] === 10) && (i < 9)) {
          return 10 + user[i+1].reduce((a, b) => a + b);
        } else if (((array.reduce((a, b) => a + b)) === 10) && (i < 9)) {
          return 10 + user[i+1][0];
        } else {
          return array.reduce((a, b) => a + b);
        };
    });
    return scores.reduce((a,b) => a + b);
};
     
module.exports = score;