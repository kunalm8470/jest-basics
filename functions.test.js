const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.nullValue()).toBeNull();
});

test('Should be undefined', () => {
    expect(functions.undefinedValue()).toBeUndefined();
});

test('Should be a falsy value', () => {
    expect(functions.falsyValue()).toBeFalsy();
});

test('Should be a truthy value', () => {
    expect(functions.truthyValue()).toBeTruthy();
});

test('User should be Kunal Mukherjee', () => {
    
    // Use .toEqual() for checking object equality as .toBe() only supports
    // checking primitive values
    expect(functions.createUser())
    .toEqual({
        firstName: 'Kunal',
        lastName: 'Mukherjee'
    });
});

test('Should contain name in the array', () => {
    const userNames = ['Kunal', 'John', 'Joe'];
    expect(userNames).toContain('Joe');
});

test('User fetched needs to be Leanne Graham', async() => {
    const { name } = await functions.fetchFirstUser();
    expect(name).toBe('Leanne Graham');
});