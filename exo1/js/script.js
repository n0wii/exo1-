//Mise en contexte pour la suite du programme.
let histoire ="John est un personnage avec une santé mentale à 10, la musique dans le taxi change à chaque feu rouge, dès qu'il entend Anissa de Wejdene il perd 1 point, au bout de 30 feu rouge John aura t-il survécu?";
    console.log(histoire);

// Personnage John et sa santé mentale initiale.
const john = {
    prenom: "John",
    santeMentale: 10, // La santé mentale de John commence à 10.
  };
  
// Liste de musiques possibles pendant le trajet.
  const musiques = ["Anissa - Wejdene", "Home - Toby Fox", "Blue Foundation - Eyes On Fire", "Popular Monster - Falling in Reverse", "The Funeral - Yungblud"];
  
// Trajet avec 30 feux rouges et aucun changement de taxi.
  const trajet = {
    feuxRouges: 30,
  changementsTaxi: 0,
  };
  
// Fonction pour jouer une musique aléatoire au feu rouge.
  function jouerMusiqueAleatoire() {

// Musique aléatoire dans la liste.
  const musique = musiques[Math.floor(Math.random() * musiques.length)];
    
// Affichage de la musique jouée et du nombre de feux rouges restants.
    console.log("Musique jouée : " + musique + " - Feux restants : " + trajet.feuxRouges);
    
// Renvoie la musique choisie.
    return musique;
  }
  
// Boucle pour simuler le trajet jusqu'à ce que tous les feux rouges soient traversés.
  while (trajet.feuxRouges > 0) {

    // Fonction choisie et afficher une musique.
    const musique = jouerMusiqueAleatoire();
     
// Vérification si la musique est "Anissa - Wejdene".
  if (musique === "Anissa - Wejdene"){
      
// Réduction de la santé mentale de John et incrémentation du nombre de changements de taxi.
      john.santeMentale -= 1;
      trajet.changementsTaxi += 1;
 
// Affichage du changement de taxi et de la santé mentale de John.
      console.log("John change de taxi. Santé mentale actuelle : " + john.santeMentale);
    }
  
// Enleverle nombre de feu rouge restant.
    trajet.feuxRouges -= 1;
  }
  
// Vérification de la fin du trajet.
  if (john.santeMentale <= 0) {
    
   
// Si la santé mentale de John est tombée à zéro ou moins, il a "explosé".
    console.log("Explosion");
  } else {
    
// Sinon, affichage du message indiquant que John est bien arrivé à destination avec le nombre de changements de taxi.
    console.log("John est bien arrivé à destination avec " + trajet.changementsTaxi + " changements de taxi.");
  }

  
  
  
  
  
  
  
  
  
  