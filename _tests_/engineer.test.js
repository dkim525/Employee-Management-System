const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return engineer's name", () => {
            let person = new Engineer("Nate");

            expect(person.getName()).toEqual("Nate");
        })
    });

    describe("getId", () => {
        it("Should return engineer's ID", () => {
            let person = new Engineer("Sean", 500);

            expect(person.getId()).toEqual(500);
        })
    });

    describe("getEmail", () => {
        it("Should return engineer's email address", () => {
            let person = new Engineer("Adam", 300, "adam@gmail.com");

            expect(person.getEmail()).toEqual("adam@gmail.com");
        })
    });

    describe("getGitHub", () => {
        it("Should return engineer's GitHub username", () => {
            let person = new Engineer("Sierra", 450, "sierra@gmail.com", "sierra");

            expect(person.getGitHub()).toEqual("sierra");
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Engineer();

            expect(person.getRole()).toEqual("Engineer");
        })
    })
})