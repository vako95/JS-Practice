// JS-MATH

// function absoluteDifference(a,b){
//     return Math.abs(a - b);
// }

// console.log(absoluteDifference(10, 4))



// function absoluteDifference(array){

//    return  array.reduce((acc, cur) => {
//         return acc + Math.abs(cur);
//     },0)
// }

// console.log(absoluteDifference([-1, 2, -3, 4]))


// function maxDifference(array){
//     if(array.length === 0) return null;

//     const max = Math.max(...array);
//     const min = Math.min(...array);

//     return Math.abs(max - min);
// }

// console.log(maxDifference([2, 9, -3, 5]))




// Найти число с самой большой разницей от нуля
// function farthestFromZero(array){

//    return  array.reduce((acc,cur) => {
//        if(Math.abs(acc) > Math.abs(cur)) {
//         return cur
//        }
//        else if(Math.abs(acc) === Math.abs(cur)){
//         return cur > acc ? acc : cur
//        }
//         return acc
//        },0
//     )
// }
// console.log(farthestFromZero([1, -7, 3, 4])  )



// adoptNode() действительно ПЕРЕМЕЩАЕТ узел из одного документа в другой

const btn = document.getElementById("moveBtn")

btn.addEventListener("click",() => {
  let iframe = document.getElementById("myFrame")
  let content = iframe.contentDocument
  let z = content.getElementById("text")
  let body = document.querySelector("body")
  
  if(z){
    let a = document.adoptNode(z)
    let d = body.appendChild(a)
  }
  else if(document.getElementById("text")){
    alert("уже сделано")
  }
  else{
    alert("не работает")
  }
})


