class Person {
    constructor(name, cargo) {
        this.name = name;
        this.cargo = cargo;
        this.horas = 8;
    };

    getName() {
        return this.name;
    };
    
    setName(n){
        this.name = n;
    };

    getCargo() {
        return this.cargo;
    };

    setCargo(c) {
        this.cargo = c;
    };

    getHoras() {
        return this.horas;
    };

    setHoras(h) {
        this.horas = h;
    };
};

class Employee extends Person {
    constructor(name, cargo, salary) {
        super(name, cargo);
        this.salary = salary;
    };
    getSalary() {
        return this.salary;
    };
    setSalary(s) {
        this.salary = s;
    };
};

var p = new Person('Jonatas', 'TI');
console.log(p.getName());
console.log(p.getCargo());
console.log(p.getHoras());


var e = new Employee('Daniel meu', 2500, 'ADM');
console.log(e.getName());
console.log(e.getSalary());
console.log(e.getCargo());
console.log(e.getHoras());