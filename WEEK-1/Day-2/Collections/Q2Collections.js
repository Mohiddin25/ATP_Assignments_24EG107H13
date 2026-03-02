// Test data:
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

// Operations:
// 1. Get only active users
console.log("Active users:")
for(let element of users){
        if(element.active===true){
            console.log(element)
        }
    
}


// 2. Extract only names of active users
console.log("Names of active users are:")
for(let element of users){
        if(element.active===true){
            console.log(element.name)
        }
    
}
// 3. Check if any admin exists
for(let element of users){
    if(element.role==='admin'){
        console.log(element)
    }
}
// 4. Find user with id = 2
for(let element of users){
    if(element.id===2){
        console.log(element)
    }
}
// 5. Create a new array where Ravi becomes inactive (do NOT mutate)
let new_arr = [];

for (let element of users) {
  if (element.name === "Ravi") {
    new_arr.push({ ...element, active: false })
  } else {
    new_arr.push(element)
  }
}

console.log(new_arr);
