var carlike = function (obj, loc) {
    obj.loc = loc;
    obj.move = function () {
        console.log(loc === obj.loc);
        loc++;
        console.log(loc === obj.loc);
    };
    return obj;
}

var amy = carlike({}, 1);
var ben = carlike({}, 9);
amy.move();
ben.move();
// console.log(amy.loc);
// console.log(ben.loc);

