
var hidden_status = 0;
var roll = 1;
var rools = [];
var score = 0;
var i = 0
function Bowling() {

};

Bowling.prototype.frame = function (){
  frame = frame + 1
}
//returning number of pin on UI
Bowling.prototype.returnPinNumber = function(number) {
  if(rools.length < 20) {
    if(number === 10){  //if rolled number is Strike then print "-" and push 0 to array score will looks like : X, -
      rools.push(number);// push chosed number to array
      rools.push(0);//push 0 value after Strike
   }else if (number != 10){ // other case print number and push number to array
        rools.push(number);
    };
   };
 };

Bowling.prototype.pickedNumberToFrame = function(number){
  if(number === 10) {  //if rolled number is Strike then print "-" and push 0 to array score will looks like : X, -
    $('#roll'+roll+'').text(number);
    roll = roll + 1
    $('#roll'+roll+'').text("-");
    roll = roll + 1
  }else if(number != 10) {
    $('#roll'+roll+'').text(number);
    roll = roll + 1
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
    $("#numbers_top").hide();
    $("#numbers_bottom").hide();
    alert("Game is finished check yours score!");
    $('#test').text("yours score is : ");
    $('#test').append(this.score());
  };
  };

Bowling.prototype.statusButtons = function(number){
  if (hidden_status === 0){
    this.hideButtons(number)
 }else if (hidden_status === 1) {
    this.showButtons(number)
};
};




Bowling.prototype.showButtons = function(number){
  for(i = number + 1; i < 11; i++){
    $('#button'+i+'').show();
  };
    hidden_status = 0;
 };

 Bowling.prototype.hideButtons = function(number){
   var buttons_size = 10; //total number of buttons
   var to_hide = buttons_size - number //check how many buttons have to be hidden
   for(i = to_hide + 1; i <= 10; i++) {
     $('#button'+i+'').hide();
     hidden_status = 1;
   };
 };
