//Defeine a function named generateGrade that takes a parameter marks
function generateGrade(marks){
    
    //Declare a variable grade to sore the grade
            let grade;
     
    //Use a switch statement with a condition true
        switch(true)
        {
            case marks > 79:
                grade = 'A';
                break;
            
            case marks >= 60:
                grade = 'B';
                break;
    
            case marks >= 49:
                grade = 'C';
                break;
    
            case marks >= 40:
                grade = 'D';
                break;
    
            case marks < 40:
                grade = 'E';
                break;
    
                // Default case if none of the above conditions match
            default:
                grade = "invalid grade";
            }
            
            //print the grade to the console
            console.log(grade)
        
            //return the calculated grade
            return grade;
        }
       
    console.log("please enter marks")   
    
    // Call the generateGrade function with different test cases
    generateGrade(79);
    generateGrade(55);
    generateGrade(40);    
    