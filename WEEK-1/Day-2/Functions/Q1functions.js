// Function that receives 3 number args and return the big number
function maxThreeNum(a,b,c){
        if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
       return c
    }
}

console.log(maxThreeNum(1,2,3))