/* global AFRAME */
AFRAME.registerComponent('choixIntervention', {
    schema: {type: 'selector'},
    init: function () {
        this.disparitionChoixIntervention = this.disparitionChoixIntervention.bind(this);
        this.apparitionChoixIntervention = this.apparitionChoixIntervention.bind(this);
        this.el.addEventListener("disparitionChoixIntervention",this.disparitionChoixIntervention);
        this.el.addEventListener("apparitionChoixIntervention",this.apparitionChoixIntervention);
    },

    apparitionChoixIntervention: function(){
        console.log("<- apparitionChoixIntervention")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoixIntervention: function(){
        console.log("<- disparitionChoixIntervention")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    }
});