/* global AFRAME */
AFRAME.registerComponent('choixReaction', {
    init: function () {
        this.apparitionChoixReagir = this.apparitionChoixReagir.bind(this);
        this.disparitionChoixReagir = this.disparitionChoixReagir.bind(this);
        this.el.addEventListener("disparitionChoixReagir",this.disparitionChoixReagir);
        this.el.addEventListener("apparitionChoixReagir",this.apparitionChoixReagir);
    },

    apparitionChoixReagir: function(){
        console.log("<- apparitionChoixReagir")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoixReagir: function(){
        console.log("<- disparitionChoixReagir")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    }
});