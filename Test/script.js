let tab=[8,1,3,6,3,2,7,4,14,5,9,10,11,12,13,15];
tab = tab.filter(function(a){
    return a<=10;
});

// console.log(tab);
let tab2=[];
tab = tab.sort(function(a,b){
    // console.log(a,b);
    if(a+b === 10){
        tab2.push([a,b]);
    }
});

// console.log(tab,tab2);


let array=[8,1,3,6,2,7,4,14,5,9,10,11,12,13,15];
let finalArray=[];

array.filter(function(a){
    return a<=10; //Récupérer les éléments inférieurs à 10
}).map(function(currentValue, index, arr=array){

    //Eviter de parcouru le tableau complet
    for (let i = 0; i <= arr.length/2; i++) {
        
        //Conditions d'insertion
        if(index !== i && currentValue+arr[i] === 10){
            finalArray.push([currentValue,arr[i]]);
        }
    }
});
// console.log(finalArray);//[[8,2],[3,7],[2,8],[7,3],[4,6],[9,1]]




// const ages= [32, 33, 16, 40];

// agess = ages.filter(checkAdult)   // Returns [32, 33, 40]

// function checkAdult(age) {
// return age >= 18;
// }

// console.log(agess);


let sequence=[1,0,0,2,5,6,0,9,0,8];
let readIndex = writeIndex = sequence.length-1;

for (readIndex,writeIndex; readIndex < sequence.length; readIndex--) {
    console.log(readIndex,writeIndex);
    if (sequence[readIndex]!==0){

    }
}