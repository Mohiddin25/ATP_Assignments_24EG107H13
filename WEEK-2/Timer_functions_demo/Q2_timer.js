// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP Sent Successfully\n")
let count=10
setInterval(()=>{
    count--;
    console.log(`OTP can resend after ${count} seconds`)
    if(count===0){
        console.log("Resend OTP")
    }
},1000)


