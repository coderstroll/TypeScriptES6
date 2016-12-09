var getPercent = function () { return 5; };
var getBonus = function (value, tax) {
    if (value === void 0) { value = 50; }
    if (tax === void 0) { tax = 20 + getPercent(); }
    console.log(value);
    console.log(tax);
    console.log(arguments.length);
};
getBonus();
getBonus(5);
//# sourceMappingURL=lesson11.js.map