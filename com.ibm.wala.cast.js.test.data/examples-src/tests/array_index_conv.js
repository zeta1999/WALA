var a = [];
a[0] = function reachable() { print("reachable"); };
a[1] = function also_reachable() { print("also reachable"); };
a[2] = function reachable_too() { print("reachable, too"); };
a["3"] = function reachable3() { print("reachable3"); };

var o = { toString: function() { return 2; } };

a["0"]();
a[1.0]();
a[o]();
a[3]();