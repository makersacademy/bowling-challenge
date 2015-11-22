pc.script.create('pins', function (context) {
    // Creates a new Pins instance
    var Pins = function (entity) {
        this.entity = entity;
    };

    Pins.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.startPos=[];
            this.children = this.entity.getChildren();
            for (i = 0; i < this.children.length; i++) {
            
            this.startPos.push(this.children[i].getPosition())

                
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
                     if (context.mouse.wasPressed(pc.input.MOUSEBUTTON_RIGHT) ) {
                this.resetPos();

            }
            
        },
        
        resetPos: function() {
            
            for (i = 0; i < this.children.length; i++) {
            
            this.children[i].setPosition(this.startPos[i]);
            
             this.children[i].setEulerAngles(0,0,0);
             this.children[i].rigidbody.syncEntityToBody();
            
             this.children[i].rigidbody.linearVelocity = pc.Vec3.ZERO;
             this.children[i].rigidbody.angularVelocity = pc.Vec3.ZERO;
                
            }
            console.log("reset pins")
            
        }
    };

    return Pins;
});