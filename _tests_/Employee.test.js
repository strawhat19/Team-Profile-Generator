const Employee = require(`../lib/Employee`);

describe(`Employee`,() => {
    test(`Can instantiate Employee Instance`,() => {
        const type = new Employee();
        expect(typeof type).toBe(`object`);
    })
})

describe(`Employee Name`,() => {
    test(`Employee Name is a usable String`,() => {
        const name = Employee.name;
        expect(typeof name).toBe(`string`);
    })
})