function cubeNumber(number) {
    if( typeof number !== 'number'){
        return "please provide a valid number";
    }else{
    let result= number*number*number;
    return result;
}
}
// var cube= cubeNumber(5);
// console.log(cube);