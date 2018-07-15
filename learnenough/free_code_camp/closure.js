function add() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    return arguments[0] + arguments[1];
  } else if (arguments.length == 1 && typeof arguments[0] == 'number') {
    var arg1 = arguments[0];
    return function(arg2) {
      if (typeof arg2 !== "number") {
        return undefined;
      } else {
        return arg1 + arg2;
      }
    };
  } else { console.log("no condition met");
    return undefined;
  }
}