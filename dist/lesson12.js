var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
};
displayColors("message", "red");
displayColors("message", "red", "blue");
displayColors("message", "red", "blue", "yellow", "green");
//# sourceMappingURL=lesson12.js.map