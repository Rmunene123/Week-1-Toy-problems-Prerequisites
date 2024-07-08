//Define a function called detectSpeed that takes a parameter speed
function detectSpeed(speed){
    //check if speed is 70km/h or less
    if(speed <= 70 ){
        console.log("Ok");
        
    }
    //if speed is greater than 70km/h
    else if(speed > 70){
        let demeritPoints = 0; //Initialize demeritPoints variable to 0
        let excess = speed - 70; //Calculate the speed over the limit (excess)
        demeritPoints = Math.floor(excess/5);
        
        //Check if demeritPoints exceed 12 for license suspension
        if(demeritPoints > 12)
            {
                console.log("License suspended");
            }else{
                console.log('points:',demeritPoints);
            }
       
    }else{
        console.log("invalid input"); //print invalid input
        
    }
        return; //exit the function
    

}
//example uses of the function:
detectSpeed(91);
detectSpeed(150);
detectSpeed(70);