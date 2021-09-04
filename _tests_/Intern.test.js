const Intern = require(`../lib/Intern`);

describe(`Intern`,() => {
    test(`Can instantiate Intern Instance`,() => {
        const type = new Intern();
        expect(typeof type).toBe(`object`);
    })
})

describe(`Intern Name`,() => {
    test(`Intern Name is a usable String`,() => {
        const name = Intern.name;
        expect(typeof name).toBe(`string`);
    })
})