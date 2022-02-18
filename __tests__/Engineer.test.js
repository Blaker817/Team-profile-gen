const Engineer = require('../lib/Engineer')

test('can get github', () => {
    const eng = new Engineer('test', '1', 'test@test.com', 'githubUsername')
    expect(eng.getGithub()).toBe('githubUsername')
})