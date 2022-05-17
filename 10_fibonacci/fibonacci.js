

//create the fibonacci loop for until it reaches teh desired index.
//return that position. 
//remember that 





const fibonacci = function (count) {
    if (count < 0) return "OOPS"; 
    if(count ===0) return 0;
    let arr= [0,1];
    for(let i = 2; i <=count; i++ ){
        arr.push (arr[i-2] + arr[i-1])
        
    }
    return arr[count];
};


// Do not edit below this line
module.exports = fibonacci;
