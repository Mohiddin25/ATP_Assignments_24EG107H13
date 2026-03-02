const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

// Insert new Emp at 2nd position
newemp={
    eno:110,
    name:"Khasim",
    marks:[10,20,30]
}

employees.splice(2,0,newemp)
console.log(employees)


// Remove an emp with name "Kiran"
let index=function(name){
    for(let i=0;i<employees.length;i++){
        if(employees[i].name==name){
            return i
        }
    }
}
employees.splice(index('Kiran'),1)
console.log(employees)

// 3.Change the last mark 95 to 75 of emp "Sneha"
let inx=function(name){
    for(let i=0;i<employees.length;i++){
        if(employees[i].name==name){
            return i
        }
    }
}

employees[inx('Sneha')].marks.pop()
employees[inx('Sneha')].marks.push(75)
console.log(employees)
