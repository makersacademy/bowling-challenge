/*jshint -W117 */
tenpin = new TenPin();
var control =   (function (){

					var output, result, digits, type, flag, val;
					digits = document.getElementById("calc");
          output = document.getElementById("score");
          result = document.getElementById("result")

					var init = function (){
					 tenpin.reset;
           digits.addEventListener("click", function(event){
					 type = event.target.getAttribute("data-type");
					 val = event.target.getAttribute("data-value");

 					 if (type === "digit"){
             tenpin.throw(parseInt(val));
             output.insertAdjacentHTML("beforeend",val + " ");
              }

					 else if (type === "clear"){
					 	tenpin.reset();
					 	result.innerHTML = "";
            output.innerHTML = "";

					    }
					 else if (type === "count"){
					 		tenpin.count();
              result.insertAdjacentHTML("beforeend","your result is: " + tenpin.score + " ! ")
							}
          });
        };
          return{
						init: init
					};
}());

control.init();
