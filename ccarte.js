/* l affichage 

for (let i = 0; i <= 3; i++) {
    let row = "";
    for (let j = 0; j <= 3; j++) {
        

        row += j + " ";
    }
    console.log(row);
}
*/
/*
let n = 5; 

for (let i = n; i >= 1; i--) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += "*";
  }
  console.log(ligne);
} */


for (let i = 0; i <= 3; i++) {
    let row = "";
    for (let j = 0; j <= 3; j++) {
        let a = "";
        if ((i === 0 || i === 3) && (j === 0 || j === 3)) {
            a = "corner";
        } else if ((i === 1 || i === 2) && (j === 1 || j === 2)) {
            a = "inside";
        } else {
            a = "edge";
        }
        
        row += a + " ";
    }
    console.log(row);
}



