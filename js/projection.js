/* global AFRAME */
AFRAME.registerComponent('projection', {
    init: function () {
        this.changementVideo = this.changementVideo.bind(this);
        this.onClick = this.onClick.bind(this);

        this.remClick = this.remClick.bind(this);
        this.addClick = this.addClick.bind(this);

        window.addEventListener('click', this.onClick);

        this.el.addEventListener("changementVideo", (choix) => this.changementVideo(choix));
    },

    onClick: function (evt) {
        console.log("<- click projection ");
        var currentVideo = this.el.getAttribute('material').src;
        if (!currentVideo) {return;}

        this.el.object3D.visible = true;

        console.log( "play :" + currentVideo.currentSrc)
        currentVideo.play();
        this.remClick();
    },

    changementVideo: function(choix){
        console.log("<- changementVideo " + choix.detail.video);
        if (!(choix.detail.categorieSuivante == "choixMenu")){
            document.querySelector("#" + choix.detail.video).addEventListener("ended", (e) => {
                console.log("-> afficherChoix " + choix.detail.categorieSuivante);
                this.el.emit("emitApparitionChoix", {categorie: choix.detail.categorieSuivante} );
            });
        }
        this.el.getAttribute('material').src.pause();
        this.el.setAttribute('material', "src:#" + choix.detail.video);
        this.addClick();
    },

    /**Ajout & Suppression de la récupération globale du click pour autoplay la vidéo.**/
    /**Ajout & Suppression de l'attribut sélectionnable par le Raycaster.***************/

    remClick: function(){
        console.log("<-remclick");
        window.removeEventListener('click', this.onClick);
        this.el.classList.remove('choix');
        this.el.removeEventListener('onClick', this.handler);
        this.el.sceneEl.querySelector('[cursor]').components.raycaster.refreshObjects();
    },

    addClick: function(){
        console.log("<-addclick");
        this.el.addEventListener('onClick', this.handler);
        window.addEventListener('click', this.onClick);
        this.el.classList.add('choix');
        this.el.sceneEl.querySelector('[cursor]').components.raycaster.refreshObjects();
    }
});