pc.script.create('rotateArrow', function (context) {
    // Creates a new RotateArrow instance
    var RotateArrow = function (entity) {
        this.entity = entity;
        this.rotateLeft= true;
        this.stopRotating;
    };

    RotateArrow.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        this.stopRotating = false;

            
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            
        var currenRotation;
        currentRotation = this.entity.getEulerAngles().data[1];
        
    if(this.stopRotating===false) {
            if (this.rotateLeft ===true ) {
                this.entity.rotate(0, 5*dt, 0);
        
            if (currentRotation<=-3) {
                this.rotateLeft=false;
                
            }
                
            } else if (this.rotateLeft===false && this.stopRotating===false) {
                this.entity.rotate(0, -5*dt, 0);
                if (currentRotation>=3) {
                this.rotateLeft=true;
                
            }
            }
    }
            
        },
        
        stop:function() {
            
            this.stopRotating = true;
        },
        start:function() {
        this.stopRotating = false;
            
        }
        
    };

    return RotateArrow;
});