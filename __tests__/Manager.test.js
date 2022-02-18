const Manager = require('../lib/Manager')

test('can get officeNum', () => {
    const off = new Manager('test', '1', 'test@test.com', 'officeNum')
    expect(off.getofficeNum()).toBe('officeNum')
})