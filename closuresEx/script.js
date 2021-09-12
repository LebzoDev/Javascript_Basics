

function compteur_closure(){
    let count=0;
    return function(){
        return count++;
    };
}

let val1 = compteur_closure();
console.log(val1());
console.log(val1());
console.log(val1());


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
  
