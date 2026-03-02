// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
let course=courses.filter(element=>element.length>5)
console.log(course)
//     2. map() to convert course names to uppercase
let course1=courses.map(element=>element.toUpperCase())
console.log(course1)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let course2=course1.reduce((acc,element)=>acc+" | "+element)
console.log(course2)

//     4. find() the course "react"
console.log(courses.find(element=>element=="react"))
//     5. findIndex() of "node"
console.log(courses.findIndex(element=>element=="react"))

