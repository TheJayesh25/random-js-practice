function floor(num){
    // let str1 = String(num);
    if (num>=0){
        return Number(String(num).substring(0,String(num).indexOf('.')));    
    }
    else{
        return Number(String(num).substring(0,String(num).indexOf('.')))-1; 
    }
    
    
}
// console.log(floor(-11728.02121122));
// console.log(Math.floor(-11728.02121122));
console.log(floor(11728.02121122));
console.log(Math.floor(11728.02121122));