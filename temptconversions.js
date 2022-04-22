 function fToC(fahrenheit)
{
const cell = (fahrenheit - 32) * 5 / 9;
const message = `${fahrenheit} f is  ${cell} c`;
return(message);
}

const mes = fToC(45)


console.log(fToC(45))