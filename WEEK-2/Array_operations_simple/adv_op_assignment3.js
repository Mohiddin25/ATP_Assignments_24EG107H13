// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
console.log(marks.filter(element=>element>=40))
//     2. map() to add 5 grace marks to each student
console.log(marks.map(element=>element+5))

//     3. reduce() to find highest mark
console.log(marks.reduce((acc,element)=>(acc<element)?element:acc))
//     4. find() first mark below 40
console.log(marks.find(element=>element===40))
//     5. findIndex() of mark 92
console.log(marks.findIndex(element=>element===40))