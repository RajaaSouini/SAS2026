//les instructions répétitives 
//la boucle for
// (valeur initiale ; condition ; Incrément)
for(i = 0 ; i < 6 ; i++){
    console.log("l apprenant numéro" , i);
}
//la boucle do while
let j = 0;
do {
    j++; 
    console.log(j)
}while(j < 8);

//la boucle while
let k = 0

while(k < 4){
    k++;
    console.log(k);
}
//continue or break
let ii = 0;
let nn = 0;
while (ii < 5) {
  ii++;
  if (ii === 3) {
    break;//continue
  }
  nn += ii;
  console.log(nn);
}





