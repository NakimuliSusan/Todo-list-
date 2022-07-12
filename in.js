// var name1 = 'Susan';// Global variable  used anywhere 
// function me () {
//     console.log(name1)
//     var car = 'Toyota'; // Block variable -> used only in the scope of the function
// }
// me()
//  var name = 'Susan'
// function second () {
//     console.log(name)
// }
// second()

// var secondName = 2// camel case naming variables
// var second_name = 2 // underscore case naming variables
// const children = 34 // immutable variables

// var z = null 
// console.log(z)

// var num = [1,2,3,'4',[2]]
// console.log(num.length)

// console.log(num[4][0])

// let a = "fooo"
// let b = a. concat(' bar')
// console.log(b)

// class Pupil {
//     constructor(name) {
//         this.name = name
//     }
// }

// pupil = new Pupil('Susan')
// console.log(pupil.name) // Susan
// Pupil.prototype.age = 22; // 22
// console.log(pupil.age)
// // implict coercion
// var  x = 42; 
// var  w = x +  ""  ;
// console.log(w)

// let d = ''
// console.log(Number(d))

// //explict coercion 
// var y =  '34'
//  var change = Number(y)
//  console.log(change +3)


//  const originals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const doubled = originals.map(item => item * item);
 
//  console.log(doubled);  

//  let names = "Susan";

//  if ( names != "Susan"){
//     if (names.length< 3){
//         console.log("name too short");
//     }
//     console.log(`Hello ${names}`)
//  }
//  else{
//     console.log("No name here!")
//  }

 let r = 50;
//  let q = 10;
//  let add = r+q;

//  if (add <= 30 && a >20){
//     console.log(true)
//  }
//  else{
//  console.log(false)
//  }

 // switching 

//  switch (r) {

//     case 1:
//         r > 20;
//         console.log(true)
//         break;
//     case 2:
//         r < 20;
//         break;
//     default:
//         r == 20;
//         console.log(false)
//         break;
// }
// console.log(`The value is ${r}`);

// more on switch statements
const x = 50;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x == 9):
        console.log("between 5 and 8");
        break;
    case (x > 12):
        console.log("exists ");
        break;
    default:
        console.log("none");
        break;
}

// tenary operators
let f = x % 2 != 0 ? true : false;
console.log(f);

// using for statements


function children() {
    
    var name = "Susan";
    let name2 = "Mary";
    const name3 = "Nakimuli";
    console.log({name});
    console.log({name2});
    console.log({name3});
}
children();
// console.log(name);

// nested functions
function num () { // parent scope
    var a = 2;
    function add () { // child scope
        var b = 3;
        var c = a + b;
        console.log(c);
    }
    add();
}
var p = num();
var y = num();
// console.log(p());

// closure functions (read about closures)


var num = [ 1,2,3,4,5,6,7,8,9,10] // more on loops programmiz

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// hoisting 
product()
function  product () {
    var c = 3;
    console.log(c **2);

}

'use strict';
names = 'Susan';
console.log(names);

function revStr(str) {
    let arr = new Array(str.length)
    let left = 0
    let right = str.length - 1
    while (left <= right) {
      arr[left] = str[right]
      arr[right] = str[left]
      left++
      right--
    }
    return arr.join("")

}
console.log(revStr("AkiraChix"))
console.log(revStr("My name is Susan"))

// week number 9

let a = function () {   // annoymous functions without a name
    console.log('Hello');
}
a() // how to invoke the function


let nums = [1,2,3,4,5,6,7,8]

let b = nums.map(a=> a+2)
console.log(b);

let c = nums.map(function(a) {
    return a *2
})
console.log(c);


// let button = document.getElementById('button').addEventListener('click', function() {
//     this.innerText = "Success!"; // using an event listener to await something
// })
(function () {
    console.log("Susan is my name");
})();

let u = (()=> {
    return 10
}) ()

console.log(u);