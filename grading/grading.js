 //const input= require("./index")
 let mark;
 
 function getGrade(mark){
   if(mark > 79 && mark <= 100){
     console.log("A");
   } else if(mark >= 60 && mark<= 79){
    console.log("B");
   } else if(mark > 49 && mark <= 59){
    console.log("C");
   } else if(mark >= 40 && mark <= 49){
    console.log("D");
   } else if(mark < 40){
    console.log("E");
   }

 }

 //console.log(getGrade(49));