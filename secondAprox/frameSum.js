var frameSum = (function() {
 
  return {
    getSum: function(value) {
      return value.reduce(function(accumulator, element) {
        return(accumulator + element);
      });
    }
  }
})();
