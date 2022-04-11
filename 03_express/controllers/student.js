let students = []
students[0] = {id: 1, name: "Ivanov"}
students[1] = {id: 2, name: "Petrov"}

// Вернуть всех студентов
exports.get = function (request, response) {
    response.json(students)
}

// Создать студента
exports.post = function (request, response) {
    console.log(request.body)
    students.push(request.body)
    response.sendStatus(201)
}