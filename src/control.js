/*jshint -W117 */
tenpin = new TenPin();
var control =   (function (){

					var output, result, digits, type, flag, val;
					digits = document.getElementById("calc");
          output = document.getElementById("score");
          result = document.getElementById("result");
          flag = 0;

					var init = function (){
					 tenpin.reset();
           digits.addEventListener("click", function(event){
					 type = event.target.getAttribute("data-type");
					 val = event.target.getAttribute("data-value");

 					 if (type === "digit"){
             tenpin.throw(parseInt(val));
             if (flag === 0 && parseInt(val) !== 10 && output.childNodes.length < 24){
             output.insertAdjacentHTML("beforeend",val + " ");
             flag = 1;}
             else if (flag === 1 || parseInt(val) === 10 && output.childNodes.length < 24){
              output.insertAdjacentHTML("beforeend",val + "  --  ")
              flag = 0;}
              }

					 else if (type === "clear"){
					 	tenpin.reset();
					 	result.innerHTML = "";
            output.innerHTML = "";

					    }
					 else if (type === "count"){
					 		tenpin.count();
              result.innerHTML = "";
              result.insertAdjacentHTML("beforeend","your result is: " + tenpin.score + " ! ")
							}
          });
        };
          return{
						init: init
					};
}());

control.init();
