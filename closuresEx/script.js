

function compteur_closure(){
    let count=0;
    let closure = function(){
        return count++;
    };
  
    return closure;
}

//Réference closure valeur1
let valeur1 = compteur_closure();
console.log(valeur1()); //0
console.log(valeur1()); //1

//AUtre réfrence valeur2
let valeur2 = compteur_closure();
console.log(valeur2()); //0

//Appel de la reference valeur1
console.log(valeur1()); //2


function compteur_simple(){
    let count=0;
    return count++;
}
let val2 = compteur_simple();
console.log(val2);
console.log(val2);
console.log(val2);




// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();
  
