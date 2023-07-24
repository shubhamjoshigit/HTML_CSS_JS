class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }

    get name(){
        return this._name;
    }
     set name(value){
         return this._name=value;
        
    }
    get salary(){
        return this._salary;
    }
    set salary(value){
        if(value<10000){
        console.log("Salary less than 10000");
        return;
        }
     this._salary=value;
    }
}
emp =new Employee("shubham",20000);
console.log(emp.name);
console.log(emp.salary);
