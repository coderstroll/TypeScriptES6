var getPercent = ()=> 5;
var getBonus = function(value = 50, tax = 20+getPercent()){
    console.log(value);
    console.log(tax);
    console.log(arguments.length);
}
getBonus();
getBonus(5);
