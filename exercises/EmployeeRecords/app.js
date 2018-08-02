var employees = []

function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        console.log(`Name: ${this.name}\n ${this.jobTitle}\n ${this.salary}\n ${this.status}`);
    }
}

var bob = new Employee("Bob", "Web Developer", "62,000/year");
bob.status = 'Part Time';
bob.printEmployeeForm();






employees.push(bob, jill, suzzy, sillyPants)