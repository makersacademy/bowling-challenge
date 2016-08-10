function Game() {
  this.frames = 10;
  var canvas = document.getElementById("game");
  this.width = canvas.width;
  this.height = canvas.height;
  this.context = canvas.getContext("2d");
  this.context.fillStyle = "white";
  this.keys = new KeyListener();

  this.ball = new Ball();

  this.p1 = new Person(15, 0); //create p1 instance.
  this.p1.y = this.height/2 - this.p1.height/2; //set p1's initial y position.
  this.pins =[];
  var pin1PosX = 400;
  var pin1PosY = 100-this.p1.height/2;
  this.pinsPos = [[pin1PosX,pin1PosY],[pin1PosX+15,pin1PosY+15],[pin1PosX+15,pin1PosY-15],[pin1PosX+30,pin1PosY+30],[pin1PosX+30,pin1PosY],[pin1PosX+30,pin1PosY-30],[pin1PosX+45,pin1PosY+45],[pin1PosX+45,pin1PosY+15],[pin1PosX+45,pin1PosY-15],[pin1PosX+45,pin1PosY-45]];
  for (i=0;i<10;i++){
    this.pins[i] = new Pin(this.pinsPos[i][0],this.pinsPos[i][1]);
  }

}

Game.prototype.clearCanvasAndDraw = function() {
  this.context.clearRect(0, 0, this.width, this.height); //Clear canvas area completely.
  // this.context.fillRect(this.width/2, 0, 2, this.height);

  this.p1.draw(this.context); //passing canvas 2d context to be used into p1 draw function.
  // this.p2.draw(this.context);
  for (var i=0;i<10;i++){
    this.pins[i].draw(this.context);
  }
  if(this.ball) {
    this.ball.draw(this.context);
  }
};

Game.prototype.update = function() {
  if (this.paused) return;
  if (this.keys.isPressed(40)) { // DOWN
      this.p1.y = Math.min(this.height - this.p1.height, this.p1.y + 4); //returns the smallest of the numbers. This is to make sure y position of p1 does not exceed the boundary of the canvas area.
  } else if (this.keys.isPressed(38)) { // UP
      this.p1.y = Math.max(0, this.p1.y - 4); //returns the largest of the numbers. This is to make sure y position of p1 does not exceed the boundary of the canvas area.
  }

  for (var i=0;i<10;i++){
    this.pins[i].update();
  }

  if (this.keys.isPressed(32) && (this.ball && this.ball.isThrown === false)){
    if (this.p1.chance > 0){
      this.p1.throw(this.ball);
      this.p1.chance -=1;
    } else {
      document.getElementById("message").innerHTML = "You used up 2 chances for this frame!";
    }

  }

  if(this.ball) {
    this.ball.update();
    if (this.ball.x > this.width-10) {
        this.ball.vx = 0;
        this.ball.vy = 0;
        this.ball.x = 0;
        this.ball.y = 0;
        this.ball.isThrown = false;
    }
    if (this.ball.y > this.height-10 || this.ball.y < 10) {
        this.ball.vy = 0;
    }
    if (this.ball.vx > 0) {
      for (i=0;i<10;i++){
        if(this.collisionCheck(this.ball, this.pins[i])) {
          this.pins[i].move();
        }
      }
    }
  }
  for (i=0;i<10;i++){
    for (var j=0;j<10;j++) {
      if (i !== j){
        if(this. collisionCheck(this.pins[i],this.pins[j])){
          this.pins[i].move();
        }
      }
    }
  }

};

Game.prototype.collisionCheck = function(obj1, obj2) {
  var obj1_x1 = obj1.x;
  var obj1_x2 = obj1.x+obj1.width;
  var obj2_x1 = obj2.x;
  var obj2_x2 = obj2.x + obj2.width;
  var obj1_y1 = obj1.y;
  var obj1_y2 = obj1.y+obj1.height;
  var obj2_y1 = obj2.y;
  var obj2_y2 = obj2.y+obj2.height;
  if (obj1_x2>=obj2_x1 && obj1_x1<=obj2_x2 && obj1_y2>=obj2_y1 && obj1_y1<=obj2_y2) return true;
};

// Person
function Person(x,y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 28;
    this.score = 0;
    this.chance = 2;
    this.frame = 10;
}
Person.prototype.draw = function(context)
{
    context.fillRect(this.x, this.y, this.width, this.height);
};

Person.prototype.throw = function(ball) {
  ball.x = this.x;
  ball.y = this.y+(this.height/2);
  ball.vy = 0;
  ball.vx = 7 - Math.abs(ball.vy);
  ball.isThrown = true;
};
// PIN
function Pin(x,y) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.width = 10;
  this.height = 15;
  // this.isHit = false;
}
Pin.prototype.draw = function(p) {
  p.fillRect(this.x, this.y, this.width, this.height);

};

Pin.prototype.move = function() {
  this.randomVy = function() {
    var vyRange = [-0.5, 0, 0.5];
    var velocityY = vyRange[Math.floor(Math.random()* vyRange.length)];
    return velocityY;
  };
  this.vy = this.randomVy();
  this.vx = 7 - Math.abs(this.vy);
  this.isThrown = true;

};

Pin.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
};

// BALL
function Ball() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.width = 10;
  this.height = 10;
  this.isThrown = false;
}

Ball.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
};

Ball.prototype.draw = function(p) {
  p.fillRect(this.x, this.y, this.width, this.height);

};

// KEY LISTENER
function KeyListener() {
    this.pressedKeys = [];

    this.keydown = function(e) {
        this.pressedKeys[e.keyCode] = true;
    };

    this.keyup = function(e) {
        this.pressedKeys[e.keyCode] = false;
    };

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}

  KeyListener.prototype.isPressed = function(key) {
      return this.pressedKeys[key] ? true : false;
  };

  // KeyListener.prototype.addKeyPressListener = function(keyCode, callback)
  // {
  //     document.addEventListener("keypress", function(e) {
  //         if (e.keyCode == keyCode)
  //             callback(e);
  //     });
  // };


// Initialize our game instance
var game = new Game();

function MainLoop() {
    game.update();
    game.clearCanvasAndDraw();
    // Call the main loop again at a frame rate of 30fps
    setTimeout(MainLoop, 33.3333);
}

// Start the game execution
MainLoop();
