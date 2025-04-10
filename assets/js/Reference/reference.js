// let numberin = -15

// let fixed = Math.abs(numberin)
// console.log(fixed)



// let a = Math.acos(0.5) * (180 / Math.PI) 
// console.log(a)



// adoptNode() Перенос Строки
const fr = '<p class="vaq">Vaqif</p>';

let parser = new DOMParser();
let xml = parser.parseFromString(fr, 'text/html');

let namMade = xml.querySelector(".vaq"); 

let adoptde = document.adoptNode(namMade); 

document.querySelector(".vaq").appendChild(adoptde);