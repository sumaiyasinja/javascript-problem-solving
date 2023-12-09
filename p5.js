function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "empty array"
    }
    else {
    let sum=0;
    for( let i=0; i<changeArray.length; i++){
        sum+= changeArray[i]        
    }
 return sum>= totalDue
}}

const changeArray= [0]
const changeArray2= [2,3,50]
console.log(canPay(changeArray2,10))