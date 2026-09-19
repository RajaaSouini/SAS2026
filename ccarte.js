/* l affichage 

for (let i = 0; i <= 3; i++) {
    let row = "";
    for (let j = 0; j <= 3; j++) {
        

        row += j + " ";
    }
    console.log(row);
}
*/
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



