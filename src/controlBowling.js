/*jshint -W117 */
var control = (function (BOWLING){

					var output, result, digits, type, flag, val, scoreLength1, scoreLength2;
					digits = document.getElementById("calc");
          output = document.getElementById("score");
          result = document.getElementById("result");
          flag = 0;

          var init = function (){
					 BOWLING.reset();
           digits.addEventListener("click", function(event){
					 type = event.target.getAttribute("data-type");
					 val = event.target.getAttribute("data-value");

 					 if (type === "digit"){
             BOWLING.throws(parseInt(val));
             if (flag === 0 && parseInt(val) !== 10 && output.childNodes.length < 24){
             output.insertAdjacentHTML("beforeend",val + " ");
             flag = 1;}
             else if (flag === 1 || parseInt(val) === 10 && output.childNodes.length < 24){
              output.insertAdjacentHTML("beforeend",val + " -- ");
              flag = 0;}
              }
              else if (type === "clear"){
					 	  BOWLING.reset();
					 	  result.innerHTML = "";
              output.innerHTML = "";
              }
					    else if (type === "count"){
              result.innerHTML = "";
              result.insertAdjacentHTML("beforeend","your result is: " + BOWLING.count() + " ! ")
							}
          });
        };
          return{
						init: init
					};
}(BOWLING));

control.init();
