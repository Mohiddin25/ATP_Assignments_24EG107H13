// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
let tempAbove35=temperatures.filter((element)=>element>30)
console.log(tempAbove35)
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let tempInFahrenheit=temperatures.map((element)=>(element*9/5)+32)
console.log(tempInFahrenheit)
//     3. reduce() to calculate average temperature
let avg_temp=temperatures.reduce((acc,element)=>(acc+element))
console.log(avg_temp/temperatures.length)
// console.log(avg_temp)
//     4. find() first temperature above 40
console.log(temperatures.find(element=>element===40))
//     5. findIndex() of temperature 28
console.log(temperatures.findIndex(element=>element===28))
