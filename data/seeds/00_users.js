const seedData = {
    name: "users",
    data: [
        {username: "John", password: "the chewing horse"},
        {username: "admin", password: "password"},
        {username: "Kairen", password: "secure123"},
        {username: "Jim", password: "wowZ4"}
    ]
}

exports.seed = knex => {
    return knex(seedData.name).truncate()
            .then( () => knex(seedData.name).insert(seedData.data) );
}
