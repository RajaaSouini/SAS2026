let fruits = ["apple","banana","cherry"]

console.log("Array:",fruits)

console.log("size:",fruits.length)

console.log("first Elem:",fruits[0])

// console.log("last Elem:",fruits[3])

console.log("last Elem:",fruits[fruits.length-1])

console.log("Array Type:", typeof fruits)

console.log("length Type:",typeof fruits.length)

fruits[0]="orange"

console.log("before Push:",fruits)

fruits.push("tomato")
fruits.push("apple")
fruits.push("kiwi")

console.log("After Push:",fruits)

console.log("new size:",fruits.length)

let getLast = fruits.pop()

console.log("After pop:",fruits)

// console.log("new size:",fruits.length)

// console.log("deleted Elem:",getLast)

fruits.unshift("lala")

console.log("After unshift:",fruits)

console.log("Deleted Item",fruits.shift())

console.log("New Array After Shift", fruits)




let colors = ["red","blue","green","black","white"]

console.log("simple for loop")
for(let i=0;i<colors.length;i++)
  console.log(colors[i])

console.log("forof loop")
for(let color of colors)
  console.log(color)

console.log("for in loop")
for(let index in colors)
  console.log(index,colors[index])









/**
 let colors = ["red","blue","green","black","white"]

let elem = "red"

let i=0;
let isFound = false
while(i<colors.length){
  if(colors[i]===elem)
  {
    console.log(${elem} id Found at  ${i})
    isFound = true
    break;
  }
  i++;
}
// isFound <=> isFound === true
// !isFound <=> isFound !== True | isFound === false
if(!isFound)
  console.log(${elem} Not Found !)
 */

/*
let colors = ["red","blue","green","black","white"]

let elem ;

let i=0;

while(i<colors.length && colors[i]!=elem){
  i++;
  // console.log(i)
}
if(i === colors.length)
  console.log(${elem} Not Found !)

else if(colors[i]===elem)
console.log(${elem} fount at pos ${i})
*/