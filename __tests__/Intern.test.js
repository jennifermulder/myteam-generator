const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Intern1');

    expect(intern.name).toBe('Intern1');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toContain('@');
    expect(intern.school).toContain('');
});