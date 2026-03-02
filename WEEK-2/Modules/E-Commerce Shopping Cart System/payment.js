// Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
let items=[...getCartItems()];
let subtotal=getCartTotal();
let discount=0
// 2. Apply discount if coupon provided
if(couponCode){
  discount = applyDiscount(subtotal, couponCode, items)
  
}
let total=subtotal-discount.discount

// 3. Validate payment method (card/upi/cod)
if(!validatePaymentMethod(paymentMethod)){
  return {
  orderId: generateOrderId(),
  items: items,
  subtotal: subtotal,
  discount: discount,
  total: total,
  paymentMethod: paymentMethod,
  status: 'failed',
  message: "Not a valid payment mode"
}
}


// 4. Process payment (simulate)
// 5. Reduce stock for all items
for(let prod of items){
  reduceStock(prod.id,prod.quantity)
}

// 6. Clear cart
clearCart()
// 7. Generate order summary

// Return order summary:
return {
  orderId: generateOrderId(),
  items: items,
  subtotal: subtotal,
  discount: discount,
  total: total,
  paymentMethod: paymentMethod,
  status: 'success',
  message: "Order placed successfully"
}
}

                          
export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  let payMethods=['card','upi','cod']
  if(payMethods.includes(method)){
    return true 
  }
  else {
    return false

  }
}

function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}