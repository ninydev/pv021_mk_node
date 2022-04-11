let students = []
students[0] = {id: 1, name: "Ivanov"}
students[1] = {id: 2, name: "Petrov"}

exports.get = function (request, response) {
    response.json(students)
}
