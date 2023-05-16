/* global AFRAME */
AFRAME.registerComponent('util', {
    init: function(){
        this.go = this.go.bind(this);
        this.menu = this.menu.bind(this);
        this.filme = this.filme.bind(this);
        this.reagis = this.reagis.bind(this);
        this.reagis = this.reagis.bind(this);
        this.interpose = this.interpose.bind(this);
        this.reagis_pas = this.reagis_pas.bind(this);
        this.initChemin = this.initChemin.bind(this);
        this.reInitChemin = this.reInitChemin.bind(this);
        this.initCheminTuto = this.initCheminTuto.bind(this);

        this.afficherChoixTuto = this.afficherChoixTuto.bind(this);
        this.afficherChoixMenu = this.afficherChoixMenu.bind(this);
        this.afficherChoixReagir = this.afficherChoixReagir.bind(this);
        this.afficherChoixInteragir = this.afficherChoixInteragir.bind(this);

        this.el.addEventListener("GO", this.go);
        this.el.addEventListener("MENU", this.menu);
        this.el.addEventListener("FILME", this.filme);
        this.el.addEventListener("REAGIS", this.reagis);
        this.el.addEventListener("INIT", this.initChemin);
        this.el.addEventListener("REINIT", this.reInitChemin);
        this.el.addEventListener("INTERPOSE", this.interpose);
        this.el.addEventListener("REAGIS_PAS", this.reagis_pas);
        this.el.addEventListener("TUTOINIT", this.initCheminTuto);

        this.el.addEventListener("afficherChoixTuto", this.afficherChoixTuto);
        this.el.addEventListener("afficherChoixMenu", this.afficherChoixMenu);
        this.el.addEventListener("afficherChoixReagir", this.afficherChoixReagir);
        this.el.addEventListener("afficherChoixInteragir", this.afficherChoixInteragir);

        this.afficherAmorce();
    },

    /** Affichage des panneaux de choix**/

    afficherAmorce: function(){
        console.log("<- afficherAmorce");
        document.querySelectorAll("[amorce]")
            .forEach(function(choix) {
                choix.emit("apparitionAmorce");
            });
    },

    afficherChoixTuto: function(){
        console.log("<- afficherChoixTuto");
        document.querySelectorAll("[choixTuto]")
            .forEach(function(choix) {
                choix.emit("apparitionChoixTuto");
            });
    },

    afficherChoixReagir: function(){
        console.log("<- afficherChoixReagir");
        console.log("-> apparitionChoixReagir");

        document.querySelectorAll("[choixReaction]")
            .forEach(function(choix) {
                choix.emit("apparitionChoixReagir");
            });

        window.removeEventListener('click', this.onClick);
        this.el.classList.remove('choix');
        this.el.removeEventListener('onClick', this.handler);
        this.el.sceneEl.querySelector('[cursor]').components.raycaster.refreshObjects();
    },

    afficherChoixInteragir: function(){
        console.log("<- afficherChoixInteragir");
        console.log("-> apparitionChoixInteragir");

        document.querySelectorAll("[choixIntervention]")
            .forEach(function(choix) {
                choix.emit("apparitionChoixInteragir");
            });

        window.removeEventListener('click', this.onClick);
        this.el.classList.remove('choix');
        this.el.removeEventListener('onClick', this.handler);
        this.el.sceneEl.querySelector('[cursor]').components.raycaster.refreshObjects();
    },

    afficherChoixMenu: function(){
        console.log("<- afficherChoixMenu");
        document.querySelectorAll("[choixMenu]")
            .forEach(function(choix) {
                choix.emit("apparitionChoixMenu");
            });
    },

    /** Gestion du click après selection du choix**/

    go: function(){
        console.log("<- GO ! EEEETTTT -> ");
        this.emitDisparitionAmorce();
        console.log("-> Commencement de l'experience !");
        document.querySelector('a-videosphere').emit("intro");
        this.afficherChoixTuto();
    },

    initChemin: function(){
        console.log("<- INIT");
        this.emitDisparitionChoixTuto();
        console.log("-> cheminInitial");
        document.querySelector('a-videosphere').emit("cheminInitial");
    },

    initCheminTuto: function(){
        console.log("<- TUTOINIT");
        this.emitDisparitionChoixTuto();
        console.log("-> cheminInitialTuto");
        document.querySelector('a-videosphere').emit("cheminInitialTuto");
    },

    reagis: function(){
        console.log("<- REAGIS");
        this.emitDisparitionChoixReagir();
        console.log("-> cheminReagir");
        document.querySelector('a-videosphere').emit("cheminReagir");
    },

    reagis_pas: function(){
        console.log("<- REAGIS_PAS");
        this.emitDisparitionChoixReagir();
        console.log("-> cheminPasReagir");
        document.querySelector('a-videosphere').emit("cheminPasReagir");
    },

    filme: function(){
        console.log("<- FILME");
        console.log("-> cheminFilme");
        this.emitDisparitionChoixInteragir();
        document.querySelector('a-videosphere').emit("cheminFilme");
    },

    interpose: function(){
        console.log("<- INTERPOSE");
        console.log("-> cheminInterpose");
        this.emitDisparitionChoixInteragir();
        document.querySelector('a-videosphere').emit("cheminInterpose");
    },

    menu: function(){
        console.log("<- MENU");
        this.emitDisparitionChoixMenu();
        document.querySelector('a-videosphere').emit("intro");
        this.afficherChoixTuto();
    },
    reInitChemin: function(){
        console.log("<- REINIT");
        this.emitDisparitionChoixMenu();
        console.log("-> cheminInitial");
        document.querySelector('a-videosphere').emit("cheminInitial");
    },

    /** Émission du trigger ( evite un dupliqué )**/

    emitDisparitionChoixReagir: function(){
        console.log("-> disparitionChoixReagir");
        document.querySelectorAll("[choixReaction]")
            .forEach(function(choix) {
                choix.emit("disparitionChoixReagir");
            });
    },
    emitDisparitionChoixInteragir: function(){
        console.log("-> disparitionChoixInteragir");
        document.querySelectorAll("[choixIntervention]")
            .forEach(function(choix) {
                choix.emit("disparitionChoixInteragir");
            });
    },
    emitDisparitionChoixTuto: function(){
        console.log("-> disparitionChoixTuto");
        document.querySelectorAll("[choixTuto]")
            .forEach(function(choix) {
                choix.emit("disparitionChoixTuto");
            });
    },
    emitDisparitionChoixMenu: function(){
        console.log("-> emitDisparitionChoixMenu");
        document.querySelectorAll("[choixMenu]")
            .forEach(function(choix) {
                choix.emit("disparitionChoixMenu");
            });
    },
    emitDisparitionAmorce: function(){
        console.log("-> emitDisparitionAmorce");
        document.querySelectorAll("[amorce]")
            .forEach(function(choix) {
                choix.emit("disparitionAmorce");
            });
    }
});