 //const input= require("./index")
 let mark;
 
 function getGrade(mark){
   if(mark > 79 && mark <= 100){
     return 'A';
   } else if(mark >= 60 && mark<= 79){
     return 'B';
   } else if(mark >= 50 && mark <= 59){
     return 'C';
   } else if(mark >= 40 && mark <= 49){
     return 'D';
   } else if(mark < 40){
     return 'E';
   }

 }

 module.exports ={getGrade}

 //export{getGrade};
 //console.log(getGrade(49));