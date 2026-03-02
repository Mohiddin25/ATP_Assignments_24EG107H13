// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
console.log(transactions.filter(obj=>obj.type==='credit'))
//     2. map() to extract only transaction amounts
console.log(transactions.map(obj=>obj.amount))
//     3. reduce() to calculate final account balance
console.log(transactions.reduce((acc,obj)=>acc+obj.amount,0))
//     4. find() the first debit transaction
console.log(transactions.find(obj=>obj.type==='debit'))
//     5. findIndex() of transaction with amount 10000
console.log(transactions.findIndex(obj=>obj.amount===10000))