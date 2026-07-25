class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showsalary() {
        console.log(`${this.name} earns ${this.salary}`);
    }
}

const emp = new Employee("Darshan", 50000);
emp.showsalary();