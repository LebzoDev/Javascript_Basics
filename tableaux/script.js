
// let tab_0 = new Array();
// console.log(tab_0);

// let tab_1 = Array.of(1, 2, 3, "toto", "tata");
// console.log(tab_1);// [ 1, 2, 3, "toto", "tata" ]

// let tab_2 = ["PC", "MATHS", "SVT"];
// console.log(tab_2); //[ "PC", "MATHS", "SVT" ]

// //Définit un tableau avec un element initialisé à 3
// let tab_3 = Array.of(3);
// console.log(tab_3);// [ 3 ]
// console.log(tab_3.length);// 1

// //Définit un tableau vide de trois éléments vides
// let tab_4 = new Array(3);
// console.log(tab_4);// [ <3 empty slots> ]
// console.log(tab_4.length); // 3

// for(let valeur of tab_2){
//     console.log(valeur);
//    console.log(tab_2.indexOf(valeur));
// }

//Push permet d'ajouter un élément à la fin du tableau
let tableau = ["HTML","JAVA","PHP"];
//Appel de la méthode push
tableau.push("CSS");
//Affichage du tableau avec le nouvel élément ajouté
console.log(tableau);// [ "HTML", "JAVA", "PHP", "CSS" ]

// //Pop permet de supprimer le dernier élément du tableau
// let tableau2 = ["HTML","JAVA","PHP"];
// //Appel de la méthode pop
// tableau2.pop();
// //Affichage du tableau avec le dernier élément supprimé
// console.log(tableau2);// [ "HTML", "JAVA" ]

// //Shift permet de supprimer le premier élément du tableau
// let tableau3 = ["ORANGE","JAUNE","VERT"];
// //Appel de la méthode shift
// tableau3.shift();
// //Affichage du tableau avec le premier élément supprimé
// console.log(tableau3);// [ "JAUNE", "VERT" ]


// //Unshift permet d'ajouter un élément au début du tableau
// let tableau4 = ["ORANGE","JAUNE","VERT"];
// //Appel de la méthode unshift
// tableau4.unshift("ROUGE");
// //Affichage du tableau avec le nouvel élément ajouté
// console.log(tableau4);// [ "ROUGE", "ORANGE", "JAUNE", "VERT" ]


// //Splice permet d'ajouter un élément à un endroit précis du tableau
// //Le 2eme argument est le nombre d'éléments à supprimer = 0 ici
// let tab = ["ORANGE","JAUNE","VERT"];
// //Insertion d'un élément à l'index 1 du tableau
// tab.splice(1,0,"ROUGE");
// //Affichage du tableau avec le nouvel élément ajouté
// console.log(tab);// [ "ORANGE", "ROUGE", "JAUNE", "VERT" ]

// //Splice permet de supprimer un élément à un endroit précis du tableau
// let tab_1 = ["CHIEN","CHAT","CHEVAL"];
// //Suppression d'1 élément à partir de l'index 1 du tableau
// tab_1.splice(1,1);
// //Affichage du tableau avec le premier élément supprimé
// console.log(tab_1);// [ "CHIEN", "CHEVAL" ]

// //@Lebzodev

// //Splice permet de remplacer un élément à un endroit précis du tableau
// let elements = ["ORANGE","JAUNE","VERT"];
// //Remplacement de l'élément à l'index 1 du tableau par "ROUGE"
// elements.splice(1,1,"ROUGE");
// //Affichage du tableau avec le premier élément supprimé
// console.log(elements);// [ "ORANGE", "ROUGE", "VERT" ]

// //Cas d'ajout d'un seul élément
// let tableau = ["HTML","JAVA","PHP","CSS"];
// //Suppression de 2 éléments à partir de l'index 1
// //Ajout d'un nouvel élément "JAVASCRIPT" à partir de l'index 1
// tableau.splice(1,2,"JAVASCRIPT");
// //Affichage du tableau avec le premier élément supprimé
// console.log(tableau);// [ "HTML", "JAVASCRIPT", "PHP", "CSS" ]

// //Cas d'ajout de plusieurs éléments
// let tableau = ["HTML","JAVA","PHP","CSS"];
// //Suppression de 2 éléments à partir de l'index 1
// //Ajout de 2 nouvels éléments "JAVASCRIPT","JQUERY" à partir de l'index 1
// tableau.splice(1,2,"JAVASCRIPT", "JQUERY");
// //Affichage du tableau avec le premier élément supprimé
// console.log(tableau);// [ "HTML", "JAVASCRIPT", "JQUERY", "PHP", "CSS" ]

// //@Lebzodev


// let elements = ["a","b","c","d","e","f"];
// //"c" et "d" sont dans le tableau
// elements.indexOf("c"); //2
// elements.indexOf("d"); //3

// //"l" n'est pas dans le tableau donc renvoie -1
// elements.indexOf("l"); //-1



// let elements = ["Alain","Mamadou","Juliette","Anna","Fatou","Sonia"];
// //Renvoie le 1er élément lequel sa longueur est superieur à 7
// const lettre = elements.find(function(element){
//     return element.length > 7;
// });
// console.log(lettre);//Juliette


let elements = ["a","b","c","d","e","f"];
elements.forEach(element => {
    //Chaque élément est appelé à suivre les traitements
    console.log(element);
});
//a b c d e f


let elements = ["Alain","Mamadou","Juliette","Anna","Fatou","Sonia"];

//Renvoie les éléments qui ont une longueur supérieure ou égale à 5
const long_elements = elements.filter(function(element){
    return element.length >= 6;
});

console.log(long_elements);// ["Mamadou", "Juliette"] 

//@Lebzodev





// //Slice permet de copier un tableau
// //Index de début commence à 0
// let elements = ["a","b","c","d","e","f"];
// //Cas 1 : copie complet du tableau
// let copie = elements.slice();
// console.log(copie);// [ "a", "b", "c", "d", "e", "f" ]

// //Cas 2 : copie des éléments du tableau avec un argument de début
// let copie2 = elements.slice(2);
// console.log(copie2);// [ "c", "d", "e", "f" ]

// //Cas 3 : copie des éléments du tableau avec deux arguments
// let copie3 = elements.slice(2,4);
// //Index 4 contient "e" mais n'est pas pris en compte
// console.log(copie3);// [ "c", "d" ]

//@Lebzodev






