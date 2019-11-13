const seedData = {
    name: "userroles",
    data: [
        {user_id:1, role_id:1},
        {user_id:1, role_id:4},
        {user_id:2, role_id:2},
        {user_id:3, role_id:3},
        {user_id:3, role_id:4},
        {user_id:4, role_id:1}
    ]
}

exports.seed = knex => {
    return knex(seedData.name).truncate()
            .then( () => knex(seedData.name).insert(seedData.data) );
}