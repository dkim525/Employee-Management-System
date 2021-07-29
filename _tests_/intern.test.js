const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
        it("Should return intern's name", () => {
            let person = new Intern("Nate");

            expect(person.getName()).toEqual("Nate");
        })
    });

    describe("getId", () => {
        it("Should return intern's ID", () => {
            let person = new Intern("Seasn", 150);

            expect(person.getId()).toEqual(150);
        })
    });

    describe("getEmail", () => {
        it("Should return intern's email address", () => {
            let person = new Intern("Adam", 800, "adam@gmail.com");

            expect(person.getEmail()).toEqual("adam@gmail.com");
        })
    });

    describe("getSchool", () => {
        it("Should return the intern's school name", () => {
            let person = new Intern("Adam", 800, "adam@gmail.com", "University of Wisconsin-Madison");

            expect(person.getSchool()).toEqual("University of Wisconsin-Madison");
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Intern();

            expect(person.getRole()).toEqual("Intern");
        })
    })
})