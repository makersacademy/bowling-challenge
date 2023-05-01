const sum_arr = (arr) => {
  let total = 0;
  arr.forEach( n => total += n );
  return total;
};

module.exports = sum_arr