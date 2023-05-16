# Juste Un Jeu

Une expérience en VR écrite et jouée par des jeunes de 13 à 24 ans,
en collaboration avec Cinéclipse, le Grand Cordel MJC, la MJC de La Bellangerais, Le Claire Détour et Le Relai.

#### Pour vivre l'expérience
[Juste Un Jeu][lien-experience]

#### Framework et librairies utilisés 
[A-Frame][lien-aframe]   
[aframe-ambisonic-component][lien-ambisonic]

#### Modifications à venir
```
- Gestion optimisée du chargement des ressources
- Ajout de la gestion audio ambiphonique sur 8 canaux
```


#### Erreurs connues
Le temps a été priorisé sur l'optimisation, en résulte une architecture  en micro-service
non-aboutie ( notamment sur la gestion des choix).     
Les dupliqués de code proviennent des difficultés suivantes :
```
Si choix.* est un component à part, alors les.emit() du component util ne lui parviennent mystérieusement pas.
Cela permettrait de rétablir un fonctionnement cohérent du component util ainsi que d'apporter une organisation plus convenable.
```
```
Les echecs successifs afin d'envoyer et surtout de récupérer des paramètres lors d'un .emit().
```

### Suivre Cinéclipse :

[Tout nos réseaux][lien-alllink]  
[Notre chaîne Youtube][lien-youtube]


[lien-experience]: https://juste-un-jeu/ "Cliquez ici !"
[lien-aframe]: https://aframe.io/ "Cliquez ici !"
[lien-ambisonic]: https://github.com/datavized/aframe-ambisonic-component "Cliquez ici !"
[lien-alllink]: https://allmylinks.com/cineclipse
[lien-insta]: https://www.instagram.com/cineclipse.asso/
[lien-helloASS]: https://www.helloasso.com/associations/cineclipse/adhesions/adhesion-a-l-association-cineclipse-1
[lien-youtube]: https://www.youtube.com/channel/UCDjk_HR8fZx5b_XvhfofUYA
[lien-facebook]: https://www.facebook.com/Cineclipse

 
