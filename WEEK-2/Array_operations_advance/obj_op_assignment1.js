// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
console.log(cart.filter(cartObj=>cartObj.inStock==true))
//     2. Use map() to create a new array with:  { name, totalPrice }
let newCart=cart.map(cartObj=>({Name:cartObj.name,TotalPrice:cartObj.price*cartObj.quantity}))
console.log(newCart)
//     3. Use reduce() to calculate grand total cart value
console.log(cart.reduce((acc,cartObj)=>acc+(cartObj.price*cartObj.quantity),0))

//     4. Use find() to get details of "Mouse"
const obj = cart.find(item => item.name === "Mouse");
console.log(obj);
//     5. Use findIndex() to find the position of "Keyboard"
const index=cart.findIndex((cartObj)=>cartObj.name=='Keyboard')
console.log(index)