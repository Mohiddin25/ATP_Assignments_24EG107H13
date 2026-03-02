// - Coupon and discount logic
// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
                          
// TODO: Implement these functions
                          
export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
    if(!coupons[couponCode]){
        return {valid:false,
            message:"Invaild coupon"
    }
    }
    // 2. Check minimum amount requirement
    if(cartTotal<coupons[couponCode].minAmount){
        return {valid:false,
            message:`Minimum amount is ${coupon.minAmount}`}
    }
    if(coupons.category){
        if(!(cartItems.find(prod=>prod.category===coupons.category))){
            return {valid:false,
            message:"Coupon not valid"}
        }
    }
// 3. Check category requirement (if any)
// Return { valid: true/false, message: '...' }
    return { valid: true, message: "Coupon applied successfully" };

}                        
export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
    if(!coupons[couponCode]){
        return 0;
    }
    if(coupons[couponCode].type==='percentage'){
        return (cartTotal * coupons[couponCode].value) / 100
    }
    if(coupons[couponCode].type==='flat'){
        return coupons[couponCode].value
    }
// Return discount amount
}
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
    if(!validateCoupon(couponCode, cartTotal, cartItems)){
        return { originalTotal: cartTotal, 
        discount: 0, 
        finalTotal: cartTotal,
        message: validateCoupon(couponCode, cartTotal, cartItems).message}

    }
    return  { originalTotal: cartTotal, 
        discount: calculateDiscount(couponCode, cartTotal), 
        finalTotal: cartTotal-calculateDiscount(couponCode, cartTotal),
        message: "Discount applied"}
// 2. If valid, calculate discount
// 3. Return final amount and discount details
// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
// }
}