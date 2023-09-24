 let speed;
 const speedLimit = 70;
 let getDemerit;

//Checks speed 

 function speedDetector(speed){

//Checks whether speed is greater than 70   

   if(speed <= speedLimit){
     return 0;
   } else {

//Calculates demerit points for speed about 70
    const excessSpeed = speed - speedLimit;
    const demeritValue = 5 ;
    const demerit= excessSpeed / demeritValue;
    return demerit;
   }
 }

 module.exports ={speedDetector}

 