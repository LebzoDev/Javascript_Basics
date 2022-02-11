



let value = { name: "Ady", lastName: "Ngom" } !== { name: "Ady", lastName: "Ngom" };

console.log(value); //true

let array= [{ name: "Ady", lastName: "Ngom" },{ name: "Ady", lastName: "Ngom" },2,3,2,"chaine","lettre","lettre"];

let val = [...new Set(array)];

console.log(val);//[{ name: 'Ady', lastName: 'Ngom' },{ name: 'Ady', lastName: 'Ngom' }, 2, 3, 'chaine', 'lettre']

//There is an other way to solve it but it is not recommended

let new_val = [...new Set(array.map(JSON.stringify))].map(JSON.parse);

console.log(new_val); //Set { { name: "Ady", lastName: "Ngom" }, 2, 3, "chaine", "lettre" }

