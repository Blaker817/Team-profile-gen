function createTeam(team) {

    function createManager(manager) {
        return `
        <div class ='card'>
            <h1>Name: ${manager.name}</h1>
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>OfficeNum: ${manager.officeNum}</p>
        </div>
    `
    }

    function createIntern(intern) {
        return `
        <div class = 'card'>
            <h1>Name: ${intern.name}</h1>
            <p>ID: ${intern.id}</p>
            <p>Email: ${intern.email}</p>
            <p>School: ${intern.school}</p>
        </div>
    `
    }

    function createEngineer(engineer) {
        return `
        <div class = 'card'>
            <h1>Name: ${engineer.name}</h1>
            <p>ID: ${engineer.id}</p>
            <p>Email: ${engineer.email}</p>
            <p>Github: ${engineer.github}</p
        </div>
    `
    }

    const members = []
    members.push(team.filter(emp => emp.getRole() === "Manager").map(manager => createManager(manager)))
    members.push(team.filter(emp => emp.getRole() === "Intern").map(intern => createIntern(intern)))
    members.push(team.filter(emp => emp.getRole() === "Engineer").map(engineer => createEngineer(engineer)))
    return members.join("")

}


module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='style.css' rel='stylesheet'>
    <title>Profile Gen</title>
</head>
<body>
    ${createTeam(team)}
</body>
</html>
    `
}