/* global AFRAME */
AFRAME.registerComponent('projection', {
    init: function () {
        this.intro = this.intro.bind(this);
        this.update = this.update.bind(this);
        this.onClick = this.onClick.bind(this);
        this.cheminFilme = this.cheminFilme.bind(this);
        this.cheminReagir = this.cheminReagir.bind(this);
        this.cheminInitial = this.cheminInitial.bind(this);
        this.cheminPasReagir = this.cheminPasReagir.bind(this);
        this.cheminInterpose = this.cheminInterpose.bind(this);
        this.cheminInitialTuto = this.cheminInitialTuto.bind(this);

        this.remClick = this.remClick.bind(this);
        this.addClick = this.addClick.bind(this);

        window.addEventListener('click', this.onClick);

        this.el.addEventListener("intro", this.intro);
        this.el.addEventListener("cheminFilme", this.cheminFilme);
        this.el.addEventListener("cheminReagir", this.cheminReagir);
        this.el.addEventListener("cheminInitial", this.cheminInitial);
        this.el.addEventListener("cheminPasReagir", this.cheminPasReagir);
        this.el.addEventListener("cheminInterpose", this.cheminInterpose);
        this.el.addEventListener("cheminInitialTuto", this.cheminInitialTuto);

        this.el.addEventListener("remClick", this.remClick);
        this.el.addEventListener("addClick", this.addClick);
    },

    onClick: function (evt) {
        console.log("<- click projection" + this.el.getAttribute('material').src);
        var currentVideo = this.el.getAttribute('material').src;
        if (!currentVideo) {return;}

        this.el.object3D.visible = true;

        /**Gestion des triggers de fin de vidéo**/

        switch (currentVideo.id) {
            case "vidInit" : case "vidInitTuto" :
                    console.log("SWITCH - vidInit");
                    currentVideo.addEventListener("ended", (e) => {
                        console.log("-> afficherChoixReagir");
                        this.el.emit("afficherChoixReagir");});
                    break;
            case "vidReagir" :
                    console.log("SWITCH - vidInteragir");
                    currentVideo.removeEventListener("ended", (e) => {
                        console.log("-> afficherChoixReagir");
                        this.el.emit("afficherChoixReagir");
                    });
                    currentVideo.addEventListener("ended", (e) => {
                        console.log("-> afficherChoixInteragir");
                        this.el.emit("afficherChoixInteragir");
                    });
                    break;
            case "vidInterpose" : case "vidFilme" : case "vidPasReagir" :
                    currentVideo.removeEventListener("ended", (e) => {
                        console.log("-> afficherChoixInteragir");
                        this.el.emit("afficherChoixInteragir");
                    });
                    currentVideo.addEventListener("ended", (e) => {
                        console.log("-> afficherChoixMenu");
                        this.el.emit("afficherChoixMenu");
                    });
                break;
            case "vidIntro" :
                    currentVideo.removeEventListener("ended", (e) => {
                        console.log("-> afficherChoixMenu");
                        this.el.emit("afficherChoixMenu");
                    });
                break;
            default: console.log("SWITCH DEFAULT PAS NORMAL");
        }

        console.log( "play :" + currentVideo.currentSrc)
        currentVideo.play();
        this.remClick();
    },

    update: function (oldData) {
        console.log("<- update projection");
    },


    /**Comportement par choix**/

    intro: function(){
        console.log("<-intro");
        this.el.setAttribute('material', 'src:#vidIntro');
        this.addClick();
    },

    cheminInitial: function(){
        console.log("<-cheminInitial");
        this.el.getAttribute('material').src.pause();
        this.el.setAttribute('material', 'src:#vidInit');
        this.addClick();
    },

    cheminInitialTuto: function(){
        console.log("<-cheminInitialTuto");
        this.el.getAttribute('material').src.pause();
        this.el.setAttribute('material', 'src:#vidInitTuto');
        this.addClick();
    },

    cheminReagir: function() {
        console.log("<-cheminReagir");
        this.el.setAttribute('material', 'src:#vidReagir');
        this.addClick();
    },

    cheminPasReagir: function() {
        console.log("<-cheminPasReagir");
        this.el.setAttribute('material', 'src:#vidPasReagir');
        this.addClick();
    },
    cheminFilme: function() {
        console.log("<-cheminFilme");
        this.el.setAttribute('material', 'src:#vidFilme');
        this.addClick();
    },
    cheminInterpose: function() {
        console.log("<-cheminInterpose");
        this.el.setAttribute('material', 'src:#vidInterpose');
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