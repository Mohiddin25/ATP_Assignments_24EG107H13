function findSum(...num){
    let sum=0;
    for(let element of num){
        sum+=element
    }
    return sum
}

function findSum1(...num){
    return sum=num.reduce((acc,element)=>acc+element);
}

console.log(findSum1(10,30,40,50,20))