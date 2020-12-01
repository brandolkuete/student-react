# student-react
Cette application est la partie front-end qui consomme l'Api Rest "student-rest-jwt"

# Technologies utilisées
  * React 
  * react-router-dom
  * axios
  * Bootstrap
  * nodejs
  
# Comment fonctionne l'application?
L'application a des actions publiques et des actions privées. celles publiques sont accessibles à tous. Par contre celles qui sont privées necessitent que l'utilisateur soit authentifié. Quand l'utilisateur se logge, un "token" lui est généré, il vient du backend. Ce token est stocké dans le localeStorage du navigateur de l'utilisateur, et à chaque fois que celui-ci voudra accéder à une ressource privées, ce token est ajouté à l'entete de sa requete lui donnant ainsi tous les droits d'accès. Tant aue ce token n'est pas disponible, l'utilisateur sera toujours dirigé vers la page de LogIn lorsqu'il voudra accéder à une ressources privée.

# Comment exécuter l'application?
  1- S'assurer que node est bien installé
  2- Clonner l'application sur son ordinateur
  3- Ouvrir le projet dans un IDE au choix (VStudio Code, atom, ...)
  4- Ouvrir le terminal et exécuter la commande "npm install' ou bien "yarn install"
  5- Lancer l'application en exécutant la commande "npm start" ou bien "yarn start"
