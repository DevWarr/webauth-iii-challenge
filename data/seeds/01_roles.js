const seedData = {
    name: "roles",
    data: [
        {role_name: "sales"},
        {role_name: "admin"},
        {role_name: "warehouse"},
        {role_name: "management"}
    ]
}

exports.seed = knex => {
    return knex(seedData.name).truncate()
            .then( () => knex(seedData.name).insert(seedData.data) );
}