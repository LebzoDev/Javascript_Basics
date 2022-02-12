//Somme de plusieurs nombres entiers
function sommeEntiers(){
    var somme = 0;
    for(var i=0; i<arguments.length; i++){
        somme += arguments[i];
    }
    return somme;
}   
//Test de notre fonction
let somme = sommeEntiers(1,2,3,4,5,6,7,8,9,10);
console.log(somme);//55


function test(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
test(1,2);//1,2