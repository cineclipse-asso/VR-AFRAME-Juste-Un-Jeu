/* global AFRAME */
AFRAME.registerComponent('ambisonic-audio', {
    init: function () {
        this.changementAudio = this.changementAudio.bind(this);
        this.el.addEventListener("changementAudio", (choix) => this.changementAudio(choix));
    },

    changementAudio: function(choix){
        console.log("<- AAAAAAAAAAAAAAAAAAAchangementAudio " + choix.detail.video);
        this.el.setAttribute('material', "src:#" + choix.detail.video);
    }
});