let callFunction = function weird(){
    // weird();
    return "Hello";
   
}
// weird();
callFunction();
// console.log(typeof(callFunction()));
// console.log(callFunction());



// //----------------------------------------------------------------
// //Declaration d'une fonction sans paramètres
// function afficheMessage(){
//     console.log("Hello World");
// }
// //Appel de la fonction
// afficheMessage(); //Hello World
// //----------------------------------------------------------------
// //Déclaration d'une fonction avec paramètres
//  function somme(a,b){
//      return a+b;
//  }
//  //Appel de la fonction et affectation de la valeur de retour
// let resultat = somme(2,3);
// console.log(resultat); //5
// //----------------------------------------------------------------
// //Fonction avec paramètres et valeur par défaut
// function sommeParamDefault(a, b=2){
//     return a+b;
// }
// //Le deuxième paramètre est optionnel, il est donc par défaut à 2
// let result_1 = sommeParamDefault(3);
// console.log(result_1); //5
// //Les deux arguments on été passés à la fonction 
// let result_2 = sommeParamDefault(4,5);
// console.log(result_2); //9
// //----------------------------------------------------------------






// // Language: javascript
// // Author: Lebzodev
// //-----------------------------------------------------------------------
// //La fonction assignée à la variable est anonyme
// let afficheMessage_1 = function(){
//     return "Hello World";
// }
// //Appel et affectation de notre expression de fonction sans oublier les ()
// let message_1 = afficheMessage_1();
// console.log(message_1); // Hello World
// //------------------------------------------------------------------------
// //La fonction assignée porte un nom 
// let afficheMessage_2 = function message(){
//     return "Hello World with Name";
// }
// //Appel et affectation de notre expression de fonction sans oublier les ()
// let message_2 = afficheMessage_2();
// console.log(message_2); // Hello World with Name
// //---------------ATTENTION------------------------------------------------
// //le nom est local à la fonction (accessible uniquement dans la fonction)
// message();// message is not defined
// //------------------------------------------------------------------------


// // Language: javascript
// // Author: Lebzodev
// //-----------------------------------------------------------------------
// //Varible globale (accessible partout)
// let clef = 23;
// function getSecretCode(){
//     //Variable locale (accessible uniquement dans la fonction)
//     let secretCode = "123456";
//     return secretCode;
// }
// console.log(secretCode); // secretCode is not defined
// console.log(getSecretCode()); // 123456
// //------------------------------------------------------------------------


// //Language: javascript
// // Author: Lebzodev
// //-----------------------------------------------------------------------
// //clef déclarée dans le scope global
// let clef = 23;
// function getSecretCode(valeur){

//     //Expression de fonction dans notre fonction
//     let generateCode = function(){
//         //clef déclarée dans le scope de la fonction
//         let clef = 11;
//         console.log('Clef Interne:',clef);//Clef Interne: 11
//         return clef * 2 + valeur;
//     }

//     let secretCode = generateCode();

//     console.log('Clef Externe',clef); //Clef Externe: 23;
//     return secretCode;
// }

// //valeur = 5;
// console.log('Code secret:',getSecretCode(5));// Code secret: 27

// //En sortie de la fonction, l'argument valeur n'est plus accessible
// console.log(valeur); // valeur is not defined
// //------------------------------------------------------------------------


//Language: javascript
// Author: Lebzodev
// Subjet: IIFE
//----------------------------------------------
//Avec une fonction régulière
(function(){
    console.log("Hello World");// Hello World
}
)();
//Avec une expression de fonction 
let helloWold = (function(){
    console.log("Hello World");//Hello World
}
)();
//---------------------------------------------