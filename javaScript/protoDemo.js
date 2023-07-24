var Person=function (firstName){
    this.firstName=firstName;
}
Person.prototype.walk=function () {
    console.log("Walk...");
}
Person.prototype.sayHello=function(){
    console.log("Say Hello...");
}