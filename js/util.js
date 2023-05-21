/* global AFRAME */
AFRAME.registerComponent('util', {
    init: function(){
        this.emitApparitionChoix = this.emitApparitionChoix.bind(this);
        this.selection = this.selection.bind(this);

        this.el.addEventListener("selection", (choix) => this.selection(choix));
        this.el.addEventListener("emitDisparitionChoix", this.emitDisparitionChoix);
        this.el.addEventListener("emitApparitionChoix", (choix) => this.emitApparitionChoix(choix));

        this.el.emit("emitApparitionChoix", {categorie: "amorce"});
    },

    /**Appellé par un choix
     * A destination de plusieurs choix et du component (projection]
     **/
    selection: function(choix){
        document.querySelector('a-ambisonic').emit("changementAudio",{ video: choix.detail.video});
        this.emitDisparitionChoix(choix.detail.categorie);
        document.querySelector('a-videosphere').emit("changementVideo",{
            video: choix.detail.video,
            categorieSuivante: choix.detail.categorieSuivante});
        if (choix.detail.categorieSuivante == "choixMenu"){
            this.el.emit("emitApparitionChoix", {categorie: "choixMenu"});}
    },

    /**Appellé par un choix
     * A destination de plusieurs choix
     **/
    emitDisparitionChoix: function(categorie){
        console.log("-> emitDisparition " + categorie);
        document.querySelectorAll('[data-choix="'+categorie+'"]')
            .forEach(function(choix) {
                choix.emit("disparitionChoix");
            });
    },

    /**Appellé par le component [projection]
     * A destination de plusieurs choix
     **/
    emitApparitionChoix: function(choix){
        console.log("-> emitApparition " + choix.detail.categorie);
        document.querySelectorAll('[data-choix="'+choix.detail.categorie+'"]')
            .forEach(function(choix) {
                choix.emit("apparitionChoix");
            });
    }
});