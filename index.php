<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Juste Un Jeu</title>
    <meta name="description" content="'Juste un jeu', une expérience intéractive en réalité virtuelle - A-Frame">
	<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="js/util.js"></script>
    <script src="js/projection.js"></script>
    <script src="js/choix.js"></script>
      <script src="js/ambisonic-audio.js"></script>
    <script src="js/aframe-ambisonic-component.min.js"></script>
  </head>
  
  <body>
    
	 <a-scene log="console: false">

         <a-videosphere src="#vidAmorce" projection util class="choix" rotation="0 -90 0"></a-videosphere>

         <a-ambisonic ambisonic-audio src="#vidInit"></a-ambisonic>

         <a-plane src="#imgReagisPas" choix util data-vid="vidReagisPas" data-choix="choixReaction" data-suivant="choixMenuFin"
                  material="transparent: true" height="4" width="10" position="-9 0 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgReagis" choix util data-vid="vidReagis" data-choix="choixReaction" data-suivant="choixIntervention"
                  material="transparent: true" height="4" width="10" position="9 0 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgFilme" choix util data-vid="vidFilme" data-choix="choixIntervention" data-suivant="choixMenuFin"
                  material="transparent: true" height="4" width="10" position="-9 0 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgInterpose" choix util data-vid="vidInterpose" data-choix="choixIntervention" data-suivant="choixMenuFin"
                  material="transparent: true" height="4" width="10" position="9 0 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgInit" choix util data-vid="vidInit" data-choix="choixMenu" data-suivant="choixReaction"
                  material="transparent: true" height="4" width="10" position="0 5 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgTutoInit" choix util data-vid="vidTutoInit" data-choix="choixMenu" data-suivant="choixReaction"
                  material="transparent: true" height="4" width="10" position="0 -2 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgMenu" choix choixMenu util data-vid="vidIntro" data-choix="choixMenuFin" data-suivant="choixMenu"
                  material="transparent: true" height="4" width="10" position="0 5 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgReInit" choix choixMenu util data-vid="vidInit" data-choix="choixMenuFin" data-suivant="choixReaction"
                  material="transparent: true" height="4" width="10" position="0 -2 -10" opacity="0" class=""></a-plane>

         <a-plane src="#imgAmorce" choix amorce util data-vid="vidIntro" data-choix="amorce" data-suivant="choixMenu"
                  material="transparent: true" height="4" width="10" position="0 -4 -10" opacity="0" class=""></a-plane>

        <a-camera wasd-controls-enabled="false" arrow-key-rotation>
            <a-entity cursor="fuse: true; fuseTimeout: 1500;" raycaster="objects: .choix"
                position="0 0 -1" geometry="primitive: sphere; radius: 0.015" material="color: #5450a7; shader: flat; opacity: 0.9"

                animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 120; from: 3 3 3; to: 1 1 1"
                animation__fusing="property: scale; startEvents: fusing; easing: linear; dur: 1500; from: 1 1 1; to: 3 3 3"
                animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 100; from: 2 2 2; to: 1 1 1">
            </a-entity>
        </a-camera>

        <a-assets>
            <video preload="auto" id="vidInit" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidInit.mp4" /></video>
            <video preload="none" id="vidFilme" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidFilme.mp4" /></video>
            <video preload="none" id="vidReagis" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidReagis.mp4" /></video>
            <video preload="auto" id="vidTutoInit" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidTutoInit.mp4" /></video>
            <video preload="none" id="vidReagisPas" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidReagisPas.mp4" /></video>
            <video preload="none" id="vidInterpose" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidInterpose.mp4" /></video>
            <video preload="auto" id="vidIntro" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline loop="true">
                <source type="video/mp4" src="/web/vr/vid/vidIntro.mp4" /></video>
            <video preload="none" id="vidAmorce" style="display:none" crossorigin="anonymous" playsinline muted webkit-playsinline loop="true">
                <source type="video/mp4" src="/web/vr/vid/vidAmorce.mp4" /></video>

            <img preload="auto" id="imgAmorce" src="/web/vr/img/go.png">
            <img preload="auto" id="imgMenu" src="/web/vr/img/menu.png">
            <img preload="auto" id="imgInit" src="/web/vr/img/init.png">
            <img preload="auto" id="imgFilme" src="/web/vr/img/filme.png">
            <img preload="auto" id="imgReInit" src="/web/vr/img/reInit.png">
            <img preload="auto" id="imgReagis" src="/web/vr/img/reagis.png">
            <img preload="auto" id="imgTutoInit" src="/web/vr/img/tutoInit.png">
            <img preload="auto" id="imgReagisPas" src="/web/vr/img/reagisPas.png">
            <img preload="auto" id="imgInterpose" src="/web/vr/img/interpose.png">
        </a-assets>
    </a-scene>
  </body>
</html>