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
              this.startPos.push(this.copy(this.entity.getChildren()[i].getPosition()));
              console.log("The entity: §");
              console.log(this.entity);
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
          if (context.mouse.wasPressed(pc.input.MOUSEBUTTON_RIGHT) ) {
            this.resetPos();
          }
        },

        copy: function(o) {
          var out, v, key;
          out = Array.isArray(o) ? [] : {};
            for (key in o) {
              v = o[key];
              out[key] = (typeof v === "object") ? this.copy(v) : v;
            }
          return out;
        },

        resetPos: function() {

            for (i = 0; i < this.children.length; i++) {

            this.children[i].setPosition(this.startPos[i]);

             this.children[i].setEulerAngles(0,0,0);
             this.children[i].rigidbody.syncEntityToBody();

             this.children[i].rigidbody.linearVelocity = pc.Vec3.ZERO;
             this.children[i].rigidbody.angularVelocity = pc.Vec3.ZERO;

            }

        },

        findScore: function() {
          var pinScore;
            this.endPos=[];
            for (i = 0; i < this.children.length; i++) {
                this.endPos.push(this.copy(this.entity.getChildren()[i].getPosition()));

            }
            this.pinScore = 0;
            for (i = 0; i < this.children.length; i++) {
                if(this.endPos[i].data[1] < 0.90) {
                    this.pinScore++;
                }
            }
            return this.pinScore;
        }
    };

    return Pins;
});