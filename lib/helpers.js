const sum_arr = (arr) => {
  let total = 0;
  arr.forEach( n => total += n );
  return total;
};

module.exports = sum_arr

console.log(sum_arr([1,2,3]))