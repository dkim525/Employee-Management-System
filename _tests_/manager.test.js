const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("Should return manager's name", () => {
            let person = new Manager("Nate");

            expect(person.getName()).toEqual("Nate");
        })
    });

    describe("getId", () => {
        it("Should return manager's ID", () => {
            let person = new Manager("Sean", 500);

            expect(person.getId()).toEqual(500);
        })
    });

    describe("getEmail", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("Adam", 300, "adam@gmail.com");

            expect(person.getEmail()).toEqual("adam@gmail.com");
        })
    });

    describe("getOfficeNumber", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("Adam", 300, "adam@gmail.com", 61281088868);

            expect(person.getOfficeNumber()).toEqual(61281088868);
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Manager();

            expect(person.getRole()).toEqual("Manager");
        })
    })
})
