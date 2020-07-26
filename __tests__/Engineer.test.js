const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Engineer1', '987654', 'engineer@company.com', 'jennifermulder');

test('creates engineer name', () => {
    expect(engineer.getName()).toEqual('Engineer1');
});

test('creates engineer id', () => {
    expect(engineer.getId()).toEqual('987654');
});

test('creates engineer email', () => {
    expect(engineer.getEmail()).toEqual('engineer@company.com');
});

test('creates engineer github', () => {
    expect(engineer.getGithub()).toEqual('jennifermulder');
});

test('creates engineer role', () => {
    expect(engineer.getRole()).toEqual('Engineer')
});
