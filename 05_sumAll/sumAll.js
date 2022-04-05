const sumAll =  function(a, b){
    if (a > 0 && b > 0 && typeof(a)==="number" && typeof(b)=== "number"){
        let valuea = a; 
        let valueb = b; 
        let total = 0;
        if (a < b){
            for (let i = valuea; i <= valueb; i++ ){
                total = total+=i;
            }
            return total
        } else if (b < a) {
            for (let i =valueb; i <= valuea; i++){
                total +=i;
            }
            return total;
        }

    }else {
        return "ERROR";
    }
}  
  
  
// Do not edit below this line
module.exports = sumAll;
