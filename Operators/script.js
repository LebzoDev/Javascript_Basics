// JAVASCRIPT EQUALITY OPERATORS ( == && === && Object.is() )

//Not type safe  (==)
//Type safe     (=== && Object.is())

console.log("34"==34); //true

console.log(0==false);//true

console.log(null==undefined); //true

console.log(""==0); //true

console.log([1,3]=="1,3");//true

console.log(1/"a");

console.log(1/"a"); //NaN

console.log(NaN==NaN);

console.log(Object.is(NaN,NaN));
