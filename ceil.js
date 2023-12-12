function ceil(num){
    // let str1 = String(num);
    if (num>=0){
        return Number(String(num).substring(0,String(num).indexOf('.')))+1;    
    }
    else{
        return Number(String(num).substring(0,String(num).indexOf('.'))); 
    }
    
    
}
console.log(ceil(-11728.02121122));
console.log(Math.ceil(-13728.01121222));