let students = []
students[0] = {name: "Ivanov"}
students[1] = {name: "Petrov"}

exports.get = function (request, response) {
    response.json(students)
}
