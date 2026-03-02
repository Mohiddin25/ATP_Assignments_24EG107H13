// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
console.log(students.filter((studObj)=>studObj.marks>=40))
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let new_record=students.map(studObj=>{
    if(studObj.marks>=90){
        studObj.grade='A'
    }else if(studObj.marks>=75){
        studObj.grade='B'
        
    }else if(studObj.marks>=60){
        studObj.grade='C'
    }else{
        studObj.grade='D'
    }
    return studObj
})
console.log(new_record)


//    3. reduce() to calculate average marks
let avg=students.reduce((acc,obj)=>acc+(obj.marks),0)
console.log(avg/students.length)
//    4. find() the student who scored 92
console.log(students.find(obj=>obj.marks===92))
//    5. findIndex() of student "Kiran"
console.log(students.findIndex(obj=>obj.name==='Kiran'))