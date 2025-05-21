// let x = 20;
// let y = 35;

// let d = 20 - 35
// console.log(Math.abs(d))



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
//   };
  
//   const contactInfo = {
//     email: "john.doe@example.com",
//     phone: "+123456789"
//   };

// let profile = Object.assign({}, person, contactInfo)


// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//     }

//     info(){
//         return `Пользователь: ${this.username}, Email: ${this.email}`
//     }
// }

// class Admin extends User{
//     constructor(username, email,role ){
//         super(username,email)
//         this.role = role;
//     }

//     info(){
//         return `Админ: ${this.username}, Email: ${this.email}, Роль: ${this.role}`
//     }

// }

// const user = new User("Vako", "vako95@mail.ru");
// const admin = new Admin("Vako", "vako95@mail.ru", "admin");
// console.log(user.info());
// console.log(admin.info());


// const pricesUSD = [10, 25, 30, 100];


// const priceRub = pricesUSD.map(price => price * 90)

// console.log(priceRub)



// const ages = [12, 17, 18, 24, 15, 30, 16];

// const adults = ages.filter(age => age >= 18)
// console.log(adults)



// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
    
//    console.log(`${number} => ${number * number}`)
    
    
// })


// const numbers = [3, 6, 1, 8, 4, 7];
// let sum = 0;

// numbers.forEach((num) => {
//     if(num % 2 === 0){
//         sum += num
//     }
// })

// console.log(sum)


// const numbers = [2, 4, 6, 8, 10];

// numbers.forEach((num, rr) => {
//     console.log(`${num} '=>' ${ num + rr }`)
// })


// =============================================================


// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

// let longName = [];
// let shortName = [];

// names.forEach((name) => {
//     if(name.length > 3){
//         longName.push(name);
//     }
//     else{
//         shortName.push(name);
//     }
// })

// longName.forEach((name) => {
//     console.log(`Hello, ${name}`)
// })

// shortName.forEach((name) => {
//     console.log(`${name} is to short`)
// })


// =============================================================




// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//     console.log(`item, ${String(number)}`)
// })


// const products = [
//     { name: "Apple", price: 1.2 },
//     { name: "Banana", price: 0.5 },
//     { name: "Orange", price: 0.8 },
//     { name: "Grapes", price: 2.0 }
//   ];


// const ll = products.reduce((acc, current) => {
//     return acc + current.price 
// }, 0)

// console.log(ll)

// ==============================================

// const fruits = ["apple", "banana", "orange", "apple", "orange", "banana", "apple"];

// const obj = fruits.reduce((acc,current,index) => {
//      return acc[index] + 
// })
// console.log(obj)


// const orders = [
//     { price: 50, quantity: 2 },
//     { price: 30, quantity: 3 },
//     { price: 70, quantity: 1 },
//     { price: 15, quantity: 5 }
//   ];

// const total = orders.reduce((acc, current) => {
//     return acc + (current.price * current.quantity)
// },0)

// console.log(total)

// ====================================================
// const products = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 800 },
//     { name: "Headphones", price: 150 },
//     { name: "Monitor", price: 300 }
//   ];

//  const lengName = products.reduce((acc, current) => {
//     return acc.name.length > current.name.length ? current : acc;
//  }, products[0]) 

//  console.log(lengName);


// const products = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 800 },
//     { name: "Headphones", price: 150 },
//     { name: "Monitor", price: 300 }
//   ];


// const totalPrice  = products.reduce((acc, current) => {
//     return current.price > 500 ? acc + 1 : acc;
// },0)  
// console.log(totalPrice);


// const products = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 800 },
//     { name: "Headphones", price: 150 },
//     { name: "Monitor", price: 300 }
//   ];


//  const maxPrice = products.reduce((acc, current) => {
//     return acc.price > current.price ? acc : current
//  },{}) 

//  console.log(maxPrice)


const orders = [
    { customer: "Alice", total: 250 },
    { customer: "Bob", total: 400 },
    { customer: "Alice", total: 150 },
    { customer: "Charlie", total: 300 },
    { customer: "Bob", total: 100 },
  ];

  
  const total = orders.reduce((acc, current) => {
       acc[current.customer] = (current.total + (acc[current.customer]|| 0)); 
       return acc;
  },{})

console.log(total);

// {
//     Alice: 400,
//     Bob: 500,
//     Charlie: 300
//   }