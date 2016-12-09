var calculateSalary = function(){
    return 1000000;
}

let calculateSalaryArrow = (bonus:number,tax:number) => 5000000*bonus - tax;

console.log(calculateSalary());
console.log(calculateSalaryArrow(2,52131));