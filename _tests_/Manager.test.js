const Manager = require(`../lib/Manager`);

describe(`Manager`,() => {
    test(`Can instantiate Manager Instance`,() => {
        const type = new Manager();
        expect(typeof type).toBe(`object`);
    })
})

describe(`Manager Name`,() => {
    test(`Manager Name is a usable String`,() => {
        const name = Manager.name;
        expect(typeof name).toBe(`string`);
    })
})