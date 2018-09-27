var employees = [];

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
bob.status = "Part Time";
bob.printEmployeeForm();

var jill = new Employee("Jill", "Communications", "50,000/year" );
jill.printEmployeeForm();

var suzzy = new Employee("Suzzy", "Receptionist", "45,000/year");
suzzy.status = "Contract";
suzzy.printEmployeeForm();

var sillyPants = new Employee("Silly Pants", "Directior of Web Development", "1,000,000,000/hour");
sillyPants.printEmployeeForm();

employees.push(bob, jill, suzzy, sillyPants);
