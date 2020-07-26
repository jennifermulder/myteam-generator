const Employee = require('../lib/Employee');

const employee = new Employee('Employee1', '246810', 'employee@company.com');

test('creates employee name', () => {
   expect(employee.getName()).toEqual('Employee1');
});

test('creates employee id', () => {
    expect(employee.getId()).toEqual('246810');
});

test('creates employee email', () => {
    expect(employee.getEmail()).toEqual('employee@company.com');
});

test('creates employee role', () => {
    expect(employee.getRole()).toEqual('Employee')
});