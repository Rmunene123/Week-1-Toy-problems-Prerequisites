function generateGrade(marks){
    
    let grade;
    
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

    return grade;
}

console.log("please enter marks")   
generateGrade(79);
generateGrade(55);

