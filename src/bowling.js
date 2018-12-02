var rools = [];
var score = 0;
var i = 0
function Bowling() {

};

//returning number of pin on UI
Bowling.prototype.returnPinNumber = function(number) {
  if(rools.length < 20) {
    if(number === 10){  //if rolled number is Strike then print "-" and push 0 to array score will looks like : X, -
      rools.push(number);// push chosed number(10) to array
      rools.push(0);//push 0 value after Strike
   }else if (number != 10){ // other case print number and push number to array
      rools.push(number);
    };
   };
 };

Bowling.prototype.score = function() {


  for( i = 0; i < 20; i = i + 2) {
    var actual_value = rools[i] // value of element in array on position equal i var a = fruits.indexOf("Apple", 4);
    var index = rools.indexOf(actual_value); // passing this value to get index of this elemnt

  if(rools[i] === 10 && rools[index + 2] === 10 && rools[index + 4] === 10) { // 3 TIMES STRIKE IN ROW CASE
    score = (score + rools[i] + rools[index + 2] + rools[index + 4]); // ADDED FIRST ROLL + SECOND ROLL + THIRD ROLL

  } else if(rools[i] === 10 && rools[index + 2] === 10 && rools[index + 4] != 10) { //2 STRIKES IN ROW
    score = (score + rools[i] + rools[index + 2] + rools[index + 4]); // ADDED FIRST ROLL + SECOND ROLL + THIRD ROLL


  } else if(rools[i] === 10 && rools[index + 2] != 10) { // ONE STRIKE IN ROW
    score = (score + rools[i] + rools[index + 2] + rools[index + 3]); // STRIKE VALUE + ANOTHER 2  ROLLS

  } else if((rools[i] + rools[index + 1]) === 10 ) { //Spare case
    score = (score + rools[i] + rools[index + 1] + rools[index + 2]); // score plus another first rool
  } else {
  score = score + rools[i] + rools[index + 1]; // added roll + roll
};
};
return score // returning value of total rools
};

Bowling.prototype.alertIfFramesFinished = function ()  {
  if(rools.length === 20 || rools.length > 20) {
    $("#numbers").hide();
    $('#test').text("your score is : ");
    $('#test').append(this.score());
  };
  };
