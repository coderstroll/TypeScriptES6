
let displayColors = function(message,...colors:string[]){
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
} 
displayColors("message","red");
displayColors("message","red","blue");
displayColors("message","red", "blue","yellow","green");