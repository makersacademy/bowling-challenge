var i = 0;
var hidden_status = 0;
function Buttons() {

};
//deciding when show and when hidde buttons
Buttons.prototype.statusButtons = function(number){
  if (hidden_status === 0){
    this.hideButtons(number)
 }else if (hidden_status === 1) {
    this.showButtons(number)
};
};

// showing buttons back
Buttons.prototype.showButtons = function(number){
  for(i = number + 1; i < 11; i++){
    $('#button'+i+'').show();
  };
    hidden_status = 0;
 };

 Buttons.prototype.hideButtons = function(number){
   var buttons_size = 10; //total number of buttons
   var to_hide = buttons_size - number //check how many buttons have to be hidden
   for(i = to_hide + 1; i <= 10; i++) {
     $('#button'+i+'').hide();
     hidden_status = 1;
   };
 };
