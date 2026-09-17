//déclaration d une variable qui peut etre modifier
let a = 5; 
//déclaration d'une constante
const b = 8 ;
a += 9 ;
//condition
if (a > 8){
    console.log("a est supérieure à 8");
}else{
    console.log("a est inférieure à 8");
}

//Utilisation de la méthode switch

let day = "Monay";
switch (day){
    case "Monday":
        console.log("it's the first day of the week");
        break;
    case "Tuesday" :
        console.log("It's the second day of the day");
        break;
    case "wednesday":
        console.log("it's the third day of the week");
        break;
    default :
    console.log("weekend");
}

//Les opérateurs arithmetique et logique 
if (a += 3 >= 6 || a === 8){
    console.log("vrai");
}

let example = "Hello";
example = 42;

console.log(example);
