
// const x = 1;
// x = 2

// console.log(x);


// const x = {id:1};
// x.id = 2;

// console.log(typeof x);
// ----------------------

// let x = "hello";


// String.prototype.vaqif =  function(v) {

// }

// x.vaqif
// ----------------------
// let a = 4;
// let b = 5;

// let result = a < b ? "a больше b" : "a не больше b";
// console.log(result); // "a больше b"

// let x = 0xFFn;
// let y = 1n;

// console.log( x + y)




// adoptNode() Перенос Строки
const fr = '<p class="vaq">Vaqif</p>';

let parser = new DOMParser();
let xml = parser.parseFromString(fr, 'text/html');

let namMade = xml.querySelector(".vaq"); // ← правильно ищем по классу

let adoptde = document.adoptNode(namMade); // ← передаём DOM-узел

document.querySelector(".vaq").appendChild(adoptde); // ← вставляем по id