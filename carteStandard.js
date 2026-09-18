let x = 9;
let y =9;
for (let i = 0; i <= x; i++) {
    let row = "";
    for (let j = 0; j <= y; j++) {
        let a = "";
        if ((i === 0 || i === x) && (j === 0 || j === x)) {
            a = "corner";
        } else if ((i !== 0  && i !== x) && (j === 0 || j !== x)) {
            a = "inside";
        } else {
            a = "edge";
        }
        
        row += a + " ";
    }
    console.log(row);
}

