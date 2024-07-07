const readline = require("readline");
const prompt = readline.createInterface(
{
    input:process.stdin,
    output:process.stdout,
})
function generateGrade(){
    prompt.question('please enter student marks',function(marks){
       // marks =parseFloat(marks);
        let grade;
        console.log(marks)
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

        default:
            grade = "invalid grade";
        }
        console.log(grade)
    prompt.close()
        return grade;
    })
   
}    
generateGrade()
    
