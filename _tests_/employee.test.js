const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Should return employee's name", () => {
            let person = new Employee("Nate");

            expect(person.getName()).toEqual("Nate");
        })
    });

    describe("getId", () => {
        it("Should return employee's ID", () => {
            let person = new Employee("Sean", 200);

            expect(person.getId()).toEqual(200);
        })
    });

    describe("getEmail", () => {
        it("Should return employee's email address", () => {
            let person = new Employee("Adam", 300, "adam@gmail.com");

            expect(person.getEmail()).toEqual("adam@gmail.com");
        })
    });

    describe("getRole", () => {
        it("Should return the employee's role", () => {
            let person = new Employee();

            expect(person.getRole()).toEqual("Employee");
        })
    })
})