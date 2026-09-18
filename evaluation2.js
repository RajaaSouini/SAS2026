//et 1 
const customerAge = 8;
const basePrice = 12;
let groupSize = 4;

console.log("Customer age: " + customerAge);
console.log("Base ticet price: "+ basePrice);
console.log("Group size: " + groupSize);

//et 2 
if (customerAge < 12){
    console.log("category: child");
}else if (customerAge < 65){
    console.log("Category: Adult");
}else{
    console.log("Category: Senior");
}

//et 3 
let result = false;
if (groupSize >= 4 && basePrice >= 10){
    console.log("Group discount eligible:" , !result )
}else{
    console.log("Group discount eligible:" , result )
}

//et 4

let total = basePrice* groupSize;


//et 5 
let seatType = "VIP";

switch (seatType){
    case "Standard":
        console.log("No extra charge");
        break;
    case "VIP":
        console.log("Add $5 surcharge");
        break;
    case "IMAX":
        console.log("Add $8 surcharge");
        break;
    default:
        console.log("Unknown seat type");
}

//et 6 
console.log("Final Total: $" + total + " | Seat: " + seatType );