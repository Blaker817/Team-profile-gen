const Employee = require('../lib/Employee')

test("create object", () => {
    const emp = new Employee()
    expect(typeof(emp)).toBe('object')
})

