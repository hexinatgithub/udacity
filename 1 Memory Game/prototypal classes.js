//函数模式
/*
var Car = function(loc){
    var obj = {loc:loc}
    obj.move = function(){
        obj.loc++;
    };
    return obj
};

var ben = Car()
ben.move()
*/

//原型模式
/*
var Car = function(loc){
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj
};
Car.prototype.move = function(){
        this.loc++;
};
var ben = Car()
console.log(ben instanceof Car);
*/

//伪类模式

var Car = function(loc){
    /*使用new时自动执行Object.create(Car.prototype)操作
    并默认在最后执行return this
    */
    //this = Object.create(Car.prototype)
    this.loc = loc;
    //return this
};
Car.prototype.move = function(){
    this.loc++;
};
var ben = new Car(1)
//使用new时   Car构造器会自动指导性注释部分
ben.move()
console.log(ben.loc)
console.log(ben instanceof Car);

