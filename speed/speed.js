 let speed;
 const speedLimit = 70; // sopecifies constant speed limit of 70km/hr
 

//Function that checks speed 
 function speedDetector(speed){

//Checks whether speed is greater than 70   
   if(speed <= speedLimit){
     return 0;
   } else {


    const excessSpeed = speed - speedLimit;// Calculates excess speed
    const demeritValue = 5 ;
    const demerit= excessSpeed / demeritValue;//Calculates demerit points for speed about 70
    return demerit;
   }
 }

 module.exports ={speedDetector}

 