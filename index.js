function detectSpeed(speed){
    if(speed <= 70 ){
        console.log("Ok");
        
    }
    else if(speed > 70){
        let demeritPoints = 0;
        let excess = speed - 70;
        demeritPoints = Math.floor(excess/5);
        if(demeritPoints > 12)
            {
                console.log("License suspended");
            }else{
                console.log('points:',demeritPoints);
            }
       
    }else{
        console.log("invalid input");
        
    }
        return;
    

}
detectSpeed(91);
detectSpeed(150)
detectSpeed(70)