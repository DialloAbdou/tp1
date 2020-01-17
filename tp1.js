var read = require('readline-sync');
/**
 * Variable
 */
let Joueur1 = {
    nom: 'toto',
    age:32,
    estUnHomme: true,
    getInfo(){
        return ` nom: ${this.nom} age : ${this.age}  `
    },

 getSexe()
 {
    let genre='';
    genre = this.estUnHomme===true ? 'Masculin': 'Feminin';
    return genre;
 }

}

let Joueur2={
    nom:'Papus',
    age:52,
    estUnHomme:false,
    getInfo(){
        return ` nom: ${this.nom} age : ${this.age}  `
    },

    getSexe()
   {
    let genre='';
    genre = this.estUnHomme===true ? 'Masculin': 'Feminin';
    return genre;
   }
}

let Joueur3={
    nom:'BiBI',
    age:18,
    estUnHomme:false,

    getInfo(){
        return ` nom: ${this.nom} age : ${this.age} `
    },

   getSexe()
   {
    let genre='';
    genre = this.estUnHomme===true ? 'Masculin': 'Feminin';
    return genre;
   }
}
let joueurs =[Joueur1,Joueur2,Joueur3]
/**
 * Main
 */
principal();

/**
 * ======Fonction=======
 */

 /**
  *
  * @param {*} age
  * @param {*} age2
  */
function compareAge(J1,J2)
{
    if(J1.age> J2.age)
        console.log(`le Joueur %s est plus âgé que le joueur %s`, J1.nom,J2.nom)
    else if( J1.ageage< J2.age)
       console.log(`le Joueur2 %s est plus âgé que le joueur1 %s`, J1.nom,J2.nom)
    else
    console.log(`le Joueur %s a le même que le joueur %s`,J1.nom,J2.nom)

}
/**
 *  Affiche un nombre de ligne
 */
function AfficheLignes()
{
    var compteLigne = ""
    for(let i=0; i< 50; i++)
    {
        compteLigne+="-"
    }
    console.log(compteLigne)
}
/**
 *
 * @param {*} age
 * @param {*} age2
 */
function caluclDifferenceAge(J1,J2)
{
     if(J1.age > J2.age2)
       return(J1.age-J2.age)
     else if(J2.age> J1.age)
        return(J2.age- J1.age)
    else
       return(J.age-J1.age)

}
/**
 * 
 * @param { Afficher un Joueur} Joueur 
 */
function afficherJoueur(Joueur){
     console.log(`L'identifier du Joueures est: %s, de sexe `, Joueur.getInfo(), Joueur.getSexe())
     //console.log(`l'âge du Joueur est : %s`, Joueur.age)
   // console.log(`Le Joueur est un %s`,joueur. getInfo())

}

/**
 *
 * @param {*} age
 * @param {*} age2
 */
function afficheDifferenceAge(J1,J2)
{
    console.log(`la différence entre %s et %s est:  %d`, J1.nom,J2.nom,caluclDifferenceAge(J1,J2))
}

/**
 *
 * @param {*} type
 */
function choixMenu(type)
{
    switch(type)
    {
        case 1:
          AfficheLignes()
         afficherJoueur(Joueur1)
          AfficheLignes()
           break;
        case 2:
         AfficheLignes()
         afficherJoueur(Joueur2)
         AfficheLignes()
          break;
        case 3:
            AfficheLignes()
            compareAge(Joueur1,Joueur2)
            AfficheLignes()
         break;
        case 4:
         AfficheLignes()
         afficheDifferenceAge(Joueur1,Joueur2)
         AfficheLignes()
        break;
        case 5:
            AfficheLignes()
            AfficherLesJoueurs()
            AfficheLignes()

            break;
        case 9:
            console.log(`Merci à Bientôt ! `)
            break;
        default:
          console.log(`Désoler vous êtes dehors sur le Menu`)
          break;
    }
}
/**
 *  Menu de l'application
 */
function menu()
{
   let choix = ``;
    choix+=`1- Afficher le 1er Joueur \n\n`;
    choix+=`2- Afficher le 2er Joueur \n\n`;
    choix+=`3- Comparer l'age du Joueur \n\n`
    choix+=`4- Difference d'age entre les Joueurs \n\n`
    choix+=`5- Afficher le Liste des Joueurs \n\n`
    choix+=`9- Quitter l'application \n\n`
    console.log(choix)
}
/**
 *  Fonction Principal
 */
function principal()
{
     let unChoix = 0
     while(unChoix!==9)
     {  menu();
        unChoix = parseInt(read.questionInt("saisir un nombre chiffre ?"))
         choixMenu(unChoix)
     }

}
/**
 *  elles affiche l'ensensemble des joueurs 
 */
function AfficherLesJoueurs()
{
  for(let j of joueurs)
  {
      AfficheLignes()
      afficherJoueur(j)
      AfficheLignes()
  }
}
/**
 *  
 */
function compareLesAgesJoueur()
{    UnJoueur = joueurs[0];
    for(let i=1; i< joueurs.length; i++)
    {
        if(UnJoueur.age < joueurs[i].age)
        {
            UnJoueur = joueurs[i]
        }
    }
    console.log(`le joueur le plus âgé est: %s`,UnJoueur.nom)

}
/**
 * 
 */
function moyenAgeJoueur()
{
    let sommeAge = 0;
    for(let i=0; i< joueurs.length; i++)
    {
        sommeAge+= joueurs[i].age
    }
    let moyenAge = sommeAge/joueurs.length

    console.log(`L'âge moyen des joueurs est: %d`, moyenAge)
}

function getNewJoueur(nomJ,ageJ, sexeJ)
{ let newJoueur=new Object()
  newJoueur.nom = nomj;
  newJoueur.age = ageJ;
  if(sexeJ==='F' ||'f')
     newJoueur.estUnHomme = false;
   else
     newJoueur.estUnHomme = true;
  return newJoueur;
}