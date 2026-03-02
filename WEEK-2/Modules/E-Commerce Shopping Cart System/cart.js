// Shopping cart operations
import { getProductById, checkStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
// 1. Get product details
let product=getProductById(productId)
// 2. Check stock availability
// 3. Check if product already in cart
//    - If yes, update quantity
//    - If no, add new item
    if(checkStock(productId,quantity)){
        let itemIndex=cartItems.findIndex(prod=>prod.productId===productId)
        if(itemIndex===-1){
            cartItems.push({
      id:productId,
      name: product.name,
      price: product.price,
      quantity: quantity   
    });
        }else{
            cartItems[itemIndex].quantity+=quantity
        }
        return "successfully added"
    }
    return "Cannot add the item"

// 4. Return success/error message
}
                          
export function removeFromCart(productId) {
// Remove product from cart
    let itemIndex=cartItems.findIndex(prod=>prod.productId===productId)
    if(itemIndex!=-1){
        cartItems.splice(itemIndex,1)
    }else{
        return "No item found"
    }
    

}
                          
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
    if(checkStock(productId,newQuantity)){
            let itemIndex=cartItems.findIndex(prod=>prod.productId===productId)
            if(itemIndex!=-1){
                cartItems[itemIndex].quantity+=newQuantity
            } 
    }else{
        return "Out of stock"
    }
}
                          
export function getCartItems() {
// Return all cart items with product details
    return cartItems
}

export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
    return cartItems.reduce((acc,prod)=>acc+(prod.price*prod.quantity),0)
}
                          
export function clearCart() {
// Empty the cart
    cartItems.splice(0,cartItems.length)
}
