let displayColors13 = function(message,...colors:string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
} 
let colors:string[] = ['red','blue','white','black'];
displayColors13("message",...colors);
