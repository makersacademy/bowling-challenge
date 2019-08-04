function ScoreCard(){

};
ScoreCard.prototype.spares = function(arr){
  return arr.map(function(item, index){
    if(item.reduce(function(a,b){return a+b}) === 10 && !item.includes(10)) {
    let x = item.concat(arr[index+1])
    x.pop();
    return x
    } else {
    return "no"
    }
}).map(function(item, index) {
  if(item.length === 4) {
    let poppedItem = item
    poppedItem.pop();
    return poppedItem
  } else {
    return item
  }
}).map(function(item, index){
  if(item !== "no"){
    return item.reduce(function(a,b){return a+b})
  } else {
    return item
  }
});
};
// change this so that the array isn't merged
ScoreCard.prototype.strikes = function(arr) {
  return arr.map(function(item, index){
    if(item[0] === (10) && item.length < 3){
     return item.concat(arr[index+1])
  } else {
     return "no"
  }
}).map(function(item, index) {
  return item !== "no" ? item.reduce(function(a,b){return a+b}) : item;
})
};

ScoreCard.prototype.normalScores = function(arr) {
  return arr.map(function(item, index){
  if(item.reduce(function(a,b){return a+b}) !== 10 && item.length < 3) {
  return item.reduce(function(a,b){return a+b})
  } else {
  return "no"
  }
  });
};

ScoreCard.prototype.total = function(arr, normal, spare, strike) {
  let allScores = normal.concat(spare, strike).filter(value => value != "no");

  if(allScores.length === 9) {
    let num = arr[9].reduce(function(a,b){return a+b})
  allScores.push(num)
  return allScores
  } else if(allScores.length === 11) {
  allScores.pop();
  return allScores
  } else if(allScores.length === 12) {
  allScores.pop();
  allScores.pop();
  return allScores
  } else {
  return allScores
  }
};

ScoreCard.prototype.calculateTotal = function(arr){
  return arr.reduce(function(a,b){return a+b})
}
