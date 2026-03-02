
// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
    }
    },
    items: [
    { product: "Laptop", price: 70000 }
    ]
};

// 🎯 Task:
// 1. Create a deep copy of order
// 2. Modify in copied object:
//     i. customer.address.city
//     ii. items[0].price
//     iii. Verify original object remains unchanged

let deep_copy_order=structuredClone(order)
deep_copy_order.customer.address.city="Chennai"
deep_copy_order.items[0].price=90000
console.log(order)
console.log(deep_copy_order)