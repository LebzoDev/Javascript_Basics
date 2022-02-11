

// //Fonction régulière
// function helloWorld(){
//     console.log("Hello World");
// }
// helloWorld();//Hello World

// //Arrow function (fontion fléchée)
// let helloWorld = () => {
//     console.log("Hello World");
// }
// helloWorld();//Hello World

// //------------------------------------------------------------------------
// //Pour zero argument nous allons devoir utiliser les () vides
// let somme = () => {
//     return 2+2;
// }
// console.log(somme());//4
// //------------------------------------------------------------------------
// //Les () sont optionnels avec un seul argument
// let double = a => {
//     return a*2;
// }
// console.log(double(2));//4
// //------------------------------------------------------------------------
// //Pour une seule instruction,  le return est implicit
// let double = a => { a*2 };
// console.log(double(2));//4
// //------------------------------------------------------------------------
// //Pour une seule instruction les {} sont optionnels
// let double = a => a*2;
// console.log(double(2));//4
// //------------------------------------------------------------------------

// //Fonction régulière d'une somme de deux nombres
// function somme(a,b){
//     return a+b;
// }
// console.log(somme(2,3));//5
// //------------------------------------------------------------------------
// //Fonction fléchée d'une somme de deux nombres
// let somme = (a,b) => {
//     return a+b;
// }
// console.log(somme(2,3));//5
// //------------------------------------------------------------------------






// Language: javascript
// Author: Lebzodev
const voiture = {
    marque: "Peugeot",
    couleur : "bleu",
    // Une fonction régulière pour decrire la voiture
    description: function () {
      //this est l'objet courant (voiture)
      return "Je suis une " + this.marque + " " + this.couleur;
    },
  };
  console.log(voiture.description());
  // Je suis une Peugeot bleu
//------------------------------------------------------------------------

const voitureArrow = {
    marque: "Peugeot",
    couleur : "bleu",
    // Fonction fléchée pour cette méthode
    description: () => {
      //La fonction fléchée ne définit pas de context (this)
      return "Je suis une " + this.marque + " " + this.couleur;
    },
  };
  console.log(voitureArrow.description());
  //Je suis une undefined undefined
