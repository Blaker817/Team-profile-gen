const Intern = require('../lib/Intern')

test('can get school', () => {
    const int = new Intern('test', '1', 'test@test.com', 'school')
    expect(int.getSchool()).toBe('school')
})