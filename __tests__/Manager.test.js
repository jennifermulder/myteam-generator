const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Manager1');

    expect(manager.name).toBe('Intern1');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toContain('@');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});