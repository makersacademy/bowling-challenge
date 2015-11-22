pc.script.create('ball', function (context) {
    // Creates a new Ball instance
    var Ball = function (entity) {
        this.entity = entity;
         this.pos = new pc.Vec3();
        
        // Disabling the context menu stops the browser displaying a menu when
        // you right-click the page
        context.mouse.disableContextMenu();

        

    };

    Ball.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        this.speed=0;
        this.currentPos;
        this.clicking=false;
        this.arrow = context.root.findByName("Arrow");
        this.speedIndicator = context.root.findByName("SpeedIndicator");
        this.startPosition = this.entity.getPosition();
        this.trigger = context.root.findByName("BackWall");
        this.ballLaunched = false;
        if (context.touch) {
                context.touch.on('touchstart', this.aiming, this);
                context.touch.on('touchend', this.launch, this);
            }
        
        
        this.trigger.collision.on("triggerenter", this.reset, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
    
             if (context.mouse.wasPressed(pc.input.MOUSEBUTTON_RIGHT) ) {
                this.reset();

            }
            
                            
                if(context.mouse.isPressed(pc.input.MOUSEBUTTON_LEFT )) {

                this.aiming(dt);
                } else if(context.mouse.wasReleased(pc.input.MOUSEBUTTON_LEFT) ) {
                this.launch();
                }
        },
        
        reset: function() {
            this.entity.setPosition(this.startPosition);
            
            this.entity.setEulerAngles(0,0,0);
            this.entity.rigidbody.syncEntityToBody();
            
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
            this.speed = 0;
            this.speedIndicator.setLocalScale(0, .1, .1);
            this.ballLaunched = false;
            //enable the arrow
            this.arrow.enabled=true;

             
            
        },
        
        aiming: function(dt) {
                    this.arrow.stop;

                    this.clicking=true;
                    if (this.speed<=0.999) {
                         this.speed=this.speed+ 1*dt;
                        
                    } else {
                        this.speed=1;
                        
                    }

                    this.entity.setLocalEulerAngles(11*this.speed, -this.arrow.getEulerAngles().data[1], 0);
                     this.force = this.entity.forward.clone().scale(this.speed*1000);
                     this.speedIndicator.setLocalScale(this.speed, .1, .1);

            
        },
        
        launch: function() {
            if(this.ballLaunched === false) {
                this.clicking=false;
                //hide the arrow
                this.arrow.enabled=false;
                // this.entity.rigidbody.applyImpulse(0, this.speed*30, this.speed*50); 
                   
                // Apply the force
                this.entity.rigidbody.applyImpulse(this.force);

                this.ballLaunched = true;
            } else {
                
            }
        }
        

    };

    return Ball;
});