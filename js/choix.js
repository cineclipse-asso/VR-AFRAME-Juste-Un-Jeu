/* global AFRAME */
AFRAME.registerComponent('choix', {
    init: function () {
        this.el.onClick = this.onClick.bind(this);

        this.el.addEventListener("click",this.onClick.bind(this));

        this.apparitionChoix = this.apparitionChoix.bind(this);
        this.disparitionChoix = this.disparitionChoix.bind(this);

        this.el.object3D.visible = false;

        this.el.addEventListener("apparitionChoix",this.apparitionChoix);
        this.el.addEventListener("disparitionChoix",this.disparitionChoix);

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

    onClick: function (evt) {
        console.log("->" + evt.target.getAttribute('data-choix'));
        this.el.emit("selection", {
            video: evt.target.getAttribute('data-vid'),
            categorie: evt.target.getAttribute('data-choix'),
            categorieSuivante: evt.target.getAttribute('data-suivant')});
    },

    apparitionChoix: function(){
        console.log("<- apparitionChoix " + this.el.getAttribute('data-choix'));
        this.el.object3D.visible = true;
        this.el.classList.add('choix');
        this.el.emit("startAnim");
    },

    disparitionChoix: function(){
        console.log("<- disparitionChoix " + this.el.getAttribute('data-choix'));
        this.el.addEventListener("animationcomplete__end", (e) =>{
            this.el.object3D.visible = false;
            console.log(this.el + " retire");
            if (this.el.getAttribute('data-choix') == "amorce"){
                document.querySelector("#vidAmorce").parentNode.removeChild(document.querySelector("#vidAmorce"));}
        });
        this.el.emit("endAnim");
        this.el.classList.remove('choix');
    }
});