 let speed;
 const speedLimit = 70;
 let getDemerit;

 function speedDetector(speed, getDemerit){
    
   if(speed <= speedLimit){
     return 0;
   } else {
    const excessSpeed = speed - speedLimit;
    const demeritValue = 5 ;
    const demerit= excessSpeed / demeritValue;
    return demerit;
   }
 }

 module.exports ={speedDetector}

 