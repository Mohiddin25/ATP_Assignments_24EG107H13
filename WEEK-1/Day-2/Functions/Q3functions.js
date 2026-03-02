// Search an element and return it index

function linearSearch(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            return i
        }
    }
    return "Element not found"
}

console.log(linearSearch([10,20,30,40],50))