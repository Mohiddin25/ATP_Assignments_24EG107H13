// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
console.log(employees.filter(obj=>obj.department==='IT'))
//     2. map() to add:
//             netSalary = salary + 10% bonus
employees.map((obj)=>obj.netSalary=obj.salary+(0.1*obj.salary))
console.log(employees)
//     3. reduce() to calculate total salary payout
console.log(employees.reduce((acc,obj)=>acc+obj.salary,0))
//     4. find() employee with salary 30000
console.log(employees.find(obj=>obj.salary===30000))
//     5. findIndex() of employee "Neha"
console.log(employees.findIndex(obj=>obj.name==="Neha"))