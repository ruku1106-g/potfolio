class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  // inherited
  work() {
    console.log(`Employee ${this.name} is working`);
  }

  project() {
    console.log(`Employee ${this.name} is working on a project`);
  }
}

class Developer extends Employee {
  // overridden
  project() {
    console.log(`Employee ${this.name} is working as a developer`);
  }

  // specialized
  info() {
    console.log(`The developer name is ${this.name}, id is ${this.id}`);
  }
}

class Tester extends Employee {
  // overridden
  project() {
    console.log(`Employee ${this.name} is testing the project`);
  }

  info() {
    console.log(`The tester name is ${this.name}, id is ${this.id}`);
  }
}

const e = new Employee("varsha", 1);
e.work();
e.project();

const d = new Developer("arjun", 2);
d.work();
d.project();
d.info();

const t = new Tester("rukmini", 3);
t.work();
t.project();
t.info();
