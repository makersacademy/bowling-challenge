const CAPACITY = 10;
function Airport(capacity=CAPACITY) {
	this.capacity = capacity;
	this.dock = [];
};

Airport.prototype.requestLanding = function(plane){
  if( this.isStormy()){
  	throw new Error("Airport is closed due to bad weather");
  };
  if(this.dock.length===this.capacity){
  	throw new Error("Airport at capacity");
  };
  plane.land();
	this.dock.push(plane);
};

Airport.prototype.requestTakeOff = function(plane){
	if( this.isStormy()){
  	throw new Error("Airport is closed due to bad weather");
  };
	if(!this.dock.includes(plane)){
		throw new Error("This plane is not at this airport");
	};
	plane.takeOff();
	index = this.dock.indexOf(plane);
	if( index >=0 ){
		this.dock.splice(index,1);
	};
};

Airport.prototype.isStormy = function(){
	if( weather()=== "Stormy"){
		return true;
	}
	else {
		return false;
	};
};

function weather(){
	var weather = ["Sunny","Sunny","Sunny","Stormy"];
	return weather[Math.floor(Math.random()*4)];
}