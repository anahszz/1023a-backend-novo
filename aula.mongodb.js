use("bancoaula");

db.createCollection("estudantes");

db.estudantes.insertMany([
    {
        nome: "Ana",
        idade: 17,
    },
    {
        nome: "Bruno",
        idade: 17,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
])