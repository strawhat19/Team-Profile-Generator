const Engineer = require(`../lib/Engineer`);

describe(`Engineer`,() => {
    test(`Can instantiate Engineer Instance`,() => {
        const type = new Engineer();
        expect(typeof type).toBe(`object`);
    })
})

describe(`Engineer Name`,() => {
    test(`Engineer Name is a usable String`,() => {
        const name = Engineer.name;
        expect(typeof name).toBe(`string`);
    })
})