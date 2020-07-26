const Intern = require('../lib/Intern');

const intern = new Intern('Intern1', '789012', 'intern@company.com', 'UCSC');

test('creates intern name', () => {
    expect(intern.getName()).toEqual('Intern1');
});

test('creates intern id', () => {
    expect(intern.getId()).toEqual('789012');
});

test('creates intern email', () => {
    expect(intern.getEmail()).toEqual('intern@company.com');
});

test('creates intern school', () => {
    expect(intern.getSchool()).toEqual('UCSC');
});

test('creates intern role', () => {
    expect(intern.getRole()).toEqual('Intern')
});