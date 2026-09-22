function checkTemperature(temperature)
{
    let meassage= "";
    
    if(temperature<20)
    {
        message="cold";
    }
    else if(temperature>=20 && temperature<30)
    {
        message="normal";
    } else {
        message="Hot";
    }
    return message;
}
 console.log(checkTemperature(15));
 console.log(checkTemperature(25));
 console.log(checkTemperature(35));

