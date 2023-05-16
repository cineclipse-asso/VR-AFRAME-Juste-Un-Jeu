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
  </head>
  
  <body>
    
	 <a-scene log="console: false">

         <!-- The original example also has this 180 degree rotation, to appear to be going forward. -->
         <a-videosphere rotation="0 -90 0" src="#vidAmorce" projection util class="choix" ></a-videosphere>
         <a-plane src="#imgReagisPas" material="transparent: true" height="4" width="10" position="-9 0 -10" rotation="0 0 0" opacity="0" class="" choix choixReaction util id="REAGIS_PAS"></a-plane>
         <a-plane src="#imgReagis"material="transparent: true" height="4" width="10" position="9 0 -10" rotation="0 0 0" opacity="0" class="" choix choixReaction util id="REAGIS"></a-plane>

         <a-plane src="#imgFilme" material="transparent: true" height="4" width="10" position="-9 0 -10" rotation="0 0 0" opacity="0" class="" choix choixIntervention util id="FILME"></a-plane>
         <a-plane src="#imgInterpose" material="transparent: true" height="4" width="10" position="9 0 -10" rotation="0 0 0" opacity="0" class="" choix choixIntervention util id="INTERPOSE"></a-plane>

         <a-plane src="#imgInit" material="transparent: true" height="4" width="10" position="0 5 -10" rotation="0 0 0" opacity="0" class="" choix choixTuto util id="INIT"></a-plane>
         <a-plane src="#imgTutoInit" material="transparent: true" height="4" width="10" position="0 -2 -10" rotation="0 0 0" opacity="0" class="" choix choixTuto util id="TUTOINIT"></a-plane>

         <a-plane src="#imgMenu" material="transparent: true" height="4" width="10" position="0 5 -10" rotation="0 0 0" opacity="0" class="" choix choixMenu util id="MENU"></a-plane>
         <a-plane src="#imgReInit" material="transparent: true" height="4" width="10" position="0 -2 -10" rotation="0 0 0" opacity="0" class="" choix choixMenu util id="REINIT"></a-plane>

         <a-plane color="#ffffff" src="#imgGo" material="transparent: true" height="4" width="10" position="0 -4 -10" rotation="0 0 0" opacity="0" class="" choix amorce util id="GO"></a-plane>

           <a-camera wasd-controls-enabled="false">
             <a-entity cursor="fuse: true; fuseTimeout: 1500;" raycaster="objects: .choix"
                position="0 0 -1" geometry="primitive: sphere; radius: 0.015" material="color: #5450a7; shader: flat; opacity: 0.9"

                   animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 120; from: 3 3 3; to: 1 1 1"
                   animation__fusing="property: scale; startEvents: fusing; easing: linear; dur: 1500; from: 1 1 1; to: 3 3 3"
                   animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 100; from: 2 2 2; to: 1 1 1">
            </a-entity>

         </a-camera>

      <a-assets>
          <video preload="auto" id="vidIntro" style="display:none" crossorigin="anonymous" playsinline loop="true" webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidIntro.mp4" /></video>
            <video preload="auto" id="vidInit" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidInit.mp4" /></video>
            <video preload="auto" id="vidInitTuto" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidInitTuto.mp4" /></video>
            <video preload="none" id="vidReagir" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidReagir.mp4" /></video>
            <video preload="none" id="vidPasReagir" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidPasReagir.mp4" /></video>
            <video preload="none" id="vidInterpose" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidInterpose.mp4" /></video>
            <video preload="none" id="vidFilme" style="display:none" crossorigin="anonymous" playsinline webkit-playsinline>
                <source type="video/mp4" src="/web/vr/vid/vidFilme.mp4" /></video>
            <video preload="none" id="vidAmorce" style="display:none" crossorigin="anonymous" playsinline loop="true" muted webkit-playsinline>
              <source type="video/mp4" src="/web/vr/vid/vidAmorce.mp4" /></video>

            <img preload="auto" id="imgGo" src="/web/vr/img/go.png">
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