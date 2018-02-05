var Car = function(loc){
    this.loc = loc;
};
Car.prototype.move = function(){
    this.loc++;
};
var Van = function(loc){
    Car.call(this,loc);
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function(){/**/};


var amy = new Van(9);
amy.move()
amy.grab()
console.log(amy.loc);

console.log(amy.constructor);
