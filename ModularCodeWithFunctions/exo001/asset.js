
//Simple function with Arguments
function printAll(){
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}
printAll(1,2,34,23,3);



//Funcstion Scope
 function greetings(){

     let message="Hello";
     //Nested Function
     let sayHi = function hi(){
        //  let message ="Hi";
            message = "Hi";
     }
     sayHi();
     console.log(message);
 }
 greetings();


 //Block Scope
 let message ="Hello";
 if(message==="Hello"){
    
     let message="Inside a block";
     var autreMessage ="Message Var";
     console.log(message);
 }

console.log(message);
console.log(autreMessage);


//Immediately Invoked Function Expression
(function(){
    console.log('fonction invoquée automatiquement');
})


//Automatically Global Variable
myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}

console.log(carName)


//CLOSURES Exemple 1
 
let greeting = (function(){

    let message="Hello Closures";
    let getMessage = function(){
        return message;
    };
    return {
        getMessage:getMessage,
    };
})();

console.log(greeting.getMessage());

//CLOSURES Exemple 2

function setupCpunter(val){
    return function counter(){
        return val++;
    }
}

let counter = setupCpunter(0);
console.log(counter());
console.log(counter());
let counter2 = setupCpunter(10);
console.log(counter2());