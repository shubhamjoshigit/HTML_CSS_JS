function person(firstName,lastName,age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.getFullName=function () {
     return (this.firstName+' '+this.lastName);   
    }
}
var per=new person("shubham","Joshi",23);
console.log(per.getFullName());