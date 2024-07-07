function netSalaryCalculator(grossSalary){
    let tax;
    let nhif;
    let nssf;
    let netSalary;

    //Calculate PAYE
    switch(true){
        case grossSalary > 800000:
            tax = grossSalary * 0.35;
            break;

        case grossSalary > 500000:
            tax = grossSalary * 0.325;
            break;

        case grossSalary > 32333:
            tax = grossSalary * 0.3;
            break;

        case grossSalary > 24000:
            tax = grossSalary * 2.5;
            break;

        case grossSalary < 24000:
            tax = grossSalary * 0.1;
            break;

        default:
            tax = 0
 }

    //Calculate nhif
    switch(true){
        case grossSalary > 100000:
            nhif = 1700;
            break;

        case grossSalary >= 90000:
            nhif = 1600;
            break;

        case grossSalary >= 80000:
            nhif = 1500;
            break;

        case grossSalary >= 70000:
            nhif = 1400;
            break;

        case grossSalary >= 60000:
            nhif = 1300;
            break;

        case grossSalary >= 50000:
            nhif = 1200;
            break;

        case grossSalary >= 45000:
            nhif = 1100;
            break;

        case grossSalary >= 40000:
            nhif = 1000;
            break;

        case grossSalary > 35000:
            nhif = 950;
            break;

        case grossSalary >= 30000:
            nhif = 900;
            break;

        case grossSalary >= 25000:
            nhif = 850;
            break;

        case grossSalary >= 20000:
            nhif = 800;
            break;
                
        case grossSalary >= 15000:
            nhif = 750;
            break;

        case grossSalary >= 12000:
            nhif =500;
            break;

        case grossSalary >= 8000:
            nhif = 400;
            break;

        case grossSalary >= 6000:
            nhif = 300;
            break;
                
        case grossSalary < 5999:
            nhif = 150;
            break;

        default:
            nhif = 0;
    }

    //Calculate nssf
    if(grossSalary > 6000){
        nssf = 6000 * 0.6;
    }else{
        nssf=grossSalary * 0.6;
    }

    //Calculate net salary
    netSalary = grossSalary - nhif - nssf -tax ;
    
    console.log("equivalent to gross:",grossSalary);
    console.log("equivalent to nhif:",nhif);
    console.log("equivalent to nssf:",nssf);
    console.log("equivalent to tax:",tax);
    
    console.log("equivalent to netSalary:",netSalary);
    

    console.log("------------------------------------------------");

}
   netSalaryCalculator(34000);
   netSalaryCalculator(50000);
   netSalaryCalculator(74000);        

        
 


