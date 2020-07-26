const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Engineer1');

    expect(engineer.name).toBe('Engineer1');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toContain('@');
    expect(engineer.github).toContain('https://github.com/');
});