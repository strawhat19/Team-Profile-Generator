const Employee = require(`../lib/Employee`);

describe(`Employee`,() => {
    test(`Can instantiate Employee Instance`,() => {
        const type = new Employee();
        expect(typeof type).toBe(`object`);
    })
})