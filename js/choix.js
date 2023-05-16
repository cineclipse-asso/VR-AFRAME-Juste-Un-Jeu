/* global AFRAME */
AFRAME.registerComponent('choix', {
    schema: {type: 'selector'},
    init: function () {
        this.el.onClick = this.onClick.bind(this);
        this.el.onmouseenter = this.onmouseenter.bind(this);
        this.el.onmouseleave = this.onmouseleave.bind(this);

        this.el.addEventListener("click",this.onClick.bind(this));

        this.apparitionChoixReagir = this.apparitionChoixReagir.bind(this);
        this.disparitionChoixReagir = this.disparitionChoixReagir.bind(this);

        this.disparitionChoixInteragir = this.disparitionChoixInteragir.bind(this);
        this.apparitionChoixInteragir = this.apparitionChoixInteragir.bind(this);

        this.apparitionChoixTuto = this.apparitionChoixTuto.bind(this);
        this.disparitionChoixTuto = this.disparitionChoixTuto.bind(this);

        this.apparitionChoixMenu = this.apparitionChoixMenu.bind(this);
        this.disparitionChoixMenu = this.disparitionChoixMenu.bind(this);

        this.apparitionAmorce = this.apparitionAmorce.bind(this);
        this.disparitionAmorce = this.disparitionAmorce.bind(this);

        this.el.object3D.visible = false;

        this.el.addEventListener("apparitionChoixReagir",this.apparitionChoixReagir);
        this.el.addEventListener("disparitionChoixReagir",this.disparitionChoixReagir);

        this.el.addEventListener("apparitionChoixInteragir",this.apparitionChoixInteragir);
        this.el.addEventListener("disparitionChoixInteragir",this.disparitionChoixInteragir);

        this.el.addEventListener("apparitionChoixTuto",this.apparitionChoixTuto);
        this.el.addEventListener("disparitionChoixTuto",this.disparitionChoixTuto);

        this.el.addEventListener("apparitionChoixMenu",this.apparitionChoixMenu);
        this.el.addEventListener("disparitionChoixMenu",this.disparitionChoixMenu);

        this.el.addEventListener("apparitionAmorce",this.apparitionAmorce);
        this.el.addEventListener("disparitionAmorce",this.disparitionAmorce);

        this.el.setAttribute('animation__start',{
                'property':'opacity', 'startEvents':'startAnim' ,'easing':'easeInCubic', 'dur':'1700','from' : '0','to': '1'});

        this.el.setAttribute('animation__end',{
                'property':'opacity', 'startEvents':'endAnim', 'easing':'easeInOutExpo', 'dur':'700',  'from':'1', 'to': '0'});

        this.el.setAttribute('animation__mouseenter-color',{
                'property':'color', 'type':'color', 'startEvents':'mouseenter', 'easing':'linear', 'dur':'1500', 'from':'#ffffff', 'to':'#24739e'});

        this.el.setAttribute( 'animation__click-color',{
                'property':'color', 'type':'color', 'startEvents':'click', 'easing':'linear', 'dur':'120', 'from':'#24739e', 'to':'#ffffff'});

        this.el.setAttribute( 'animation__mouseleave-color',{
                'property':'color', 'type': 'color', 'startEvents':'mouseleave', 'easing':'linear', 'dur':'100', 'from':'#24739e', 'to':'#ffffff'});

        this.el.setAttribute('animation__mouseenter-scale',{
            'property':'scale', 'startEvents':'mouseenter', 'easing':'linear', 'dur':'120', 'from':'1 1 1', 'to':'0.8 0.8 0.8'});

        this.el.setAttribute( 'animation__click-scale',{
            'property':'scale', 'startEvents':'click', 'easing':'linear', 'dur':'500', 'from':'0.8 0.8 0.8', 'to':'1 1 1'});

        this.el.setAttribute( 'animation__mouseleave-scale',{
            'property':'scale', 'startEvents':'mouseleave', 'easing':'linear', 'dur':'200', 'from':'0.9 0.9 0.9', 'to':'1 1 1'});
    },
    onmouseenter: function (evt) {},
    onmouseleave: function (evt) {},

    onClick: function (evt) {
        var id = this.el.getAttribute('id')
        console.log("->" + id);
        this.el.emit(id);
    },

    apparitionChoixReagir: function(){
        console.log("<- apparitionChoixReagir")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        console.log("-> startAnim")
        this.el.emit("startAnim");
    },

    disparitionChoixReagir: function(){
        console.log("<- disparitionChoixReagir");

        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
        });

        console.log("-> endAnim");
        this.el.emit("endAnim");

        this.el.classList.remove('choix');
    },

    apparitionChoixInteragir: function(){
        console.log("<- apparitionChoixInteragir")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoixInteragir: function(){
        console.log("<- disparitionChoixInteragir");

        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
        });

        console.log("-> endAnim");
        this.el.emit("endAnim");

        this.el.classList.remove('choix');
    },

    apparitionChoixTuto: function(){
        console.log("<- apparitionChoixTuto")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoixTuto: function(){
        console.log("<- disparitionChoixTuto");

        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
        });

        console.log("-> endAnim");
        this.el.emit("endAnim");

        this.el.classList.remove('choix');
    },

    apparitionChoixMenu: function(){
        console.log("<- apparitionChoixMenu")
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoixMenu: function(){
        console.log("<- disparitionChoixMenu");

        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
        });

        console.log("-> endAnim");
        this.el.emit("endAnim");

        this.el.classList.remove('choix');
    },

    apparitionAmorce: function(){
        console.log("<- apparitionAmorce")

        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionAmorce: function(){
        console.log("<- disparitionAmorce");

        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
            document.querySelector("#vidAmorce").parentNode.removeChild(document.querySelector("#vidAmorce"));
        });

        console.log("-> endAnim");
        this.el.emit("endAnim");

        this.el.classList.remove('choix');
    }
});