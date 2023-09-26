
 let mark;

 //Specifies the grading sacle
 function getGrade(mark){
  // Checks whether the input score is greater than 70 and less than 100 returns grade "A"
   if(mark > 79 && mark <= 100){
     return 'A';
   } else if(mark >= 60 && mark<= 79){
  // Checks whether the input score is between 60 and 79 and returns grade "B"
     return 'B';
   } else if(mark >= 50 && mark <= 59){
  // Checks whether the input score is between 50 and 60 and returns grade "C"
     return 'C';
   } else if(mark >= 40 && mark <= 49){
  // Checks whether the input score is between 40 and 50 and returns grade "D"
     return 'D';
   } else if(mark < 40){
  // Checks whether the input score is less than 40 returns grade "E"
     return 'E';
   }

 }

 //Allows the file to be accessible by the other file
 module.exports ={getGrade}

 