/* global AFRAME */
AFRAME.registerComponent('util', {
    init: function(){
        this.emitApparitionChoix = this.emitApparitionChoix.bind(this);
        this.selection = this.selection.bind(this);

        this.el.addEventListener("selection", (choix) => this.selection(choix));
        this.el.addEventListener("emitDisparitionChoix", this.emitDisparitionChoix);
        this.el.addEventListener("emitApparitionChoix", (choix) => this.emitApparitionChoix(choix));

        /**Emit the apparition of the first "choice", amorce=primer **/
        this.el.emit("emitApparitionChoix", {categorie: "amorce"});
    },

    /**Called by one choice
     * Call [projection] component and multiple choice
     **/
    selection: function(choix){
        document.querySelector('a-ambisonic').emit("changementAudio",{ video: choix.detail.video});
        this.emitDisparitionChoix(choix.detail.categorie);
        document.querySelector('a-videosphere').emit("changementVideo",{
            video: choix.detail.video,
            categorieSuivante: choix.detail.categorieSuivante});
            this.el.sceneEl.querySelector('[cursor]').setAttribute('material', "color: #5450a7; shader: flat; opacity: 0.0");
        if (choix.detail.categorieSuivante == "choixMenu"){
            this.el.emit("emitApparitionChoix", {categorie: "choixMenu"});
            this.el.sceneEl.querySelector('[cursor]').setAttribute('material', "color: #5450a7; shader: flat; opacity: 0.9");}
		if (choix.detail.categorieSuivante == "hiddenMenu"){this.el.emit("emitApparitionChoix", {categorie: "hiddenMenu"});}
    },

    /**Called by one choice
     * Call multiple choice
     **/
    emitDisparitionChoix: function(categorie){
        console.log("-> emitDisparition " + categorie);
        document.querySelectorAll('[data-choix="'+categorie+'"]')
            .forEach(function(choix) {
                choix.emit("disparitionChoix");
            });
    },

    /**Called by the [projection] component
     * Call multiple choice
     **/
    emitApparitionChoix: function(choix){
        console.log("-> emitApparition " + choix.detail.categorie);
        document.querySelectorAll('[data-choix="'+choix.detail.categorie+'"]')
            .forEach(function(choix) {
                choix.emit("apparitionChoix");
            });
    }
});