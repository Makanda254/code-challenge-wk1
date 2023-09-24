 let speed;
 const speedLimit = 70;

 function speedDetector(speed){
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

 