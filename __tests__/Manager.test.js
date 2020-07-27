const Manager = require('../lib/Manager');

const manager = new Manager('Manager1', '123456', 'manager@company.com', '510-867-5309');

test('creates manager name', () => {
    expect(manager.getName()).toEqual('Manager1');
});

test('creates manager id', () => {
    expect(manager.getId()).toEqual('123456');
});

test('creates manager email', () => {
    expect(manager.getEmail()).toEqual('manager@company.com');
});

test('creates manager number', () => {
    expect(manager.getPhone()).toEqual('510-867-5309');
});

test('creates manager role', () => {
    expect(manager.getRole()).toEqual('Manager')
});