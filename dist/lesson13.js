var displayColors13 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var colors = ['red', 'blue', 'white', 'black'];
displayColors13.apply(void 0, ["message"].concat(colors));
//# sourceMappingURL=lesson13.js.map