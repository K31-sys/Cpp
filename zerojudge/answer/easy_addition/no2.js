var x = require("prompt");
x.start();

console.log("Input:");
x.get(["integer"], function(err, res) {
    console.log("Hello ".concat(res.name, ", how are you?"));
});
