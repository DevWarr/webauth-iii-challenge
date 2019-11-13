const users = require("./users")
const roles = require("./roles")
const userroles = require("./userroles")

const seedData = [users, roles, userroles]

exports.seed = function(knex) {
  // All seedData is in it's respective folders.
  // They're placed in an array, and then we map through that array
  // To truncate and insert each section of seedData 1 at a time.
  // MAKE SURE the seedData array is in the correct order!
  return seedData.map(table => {
    return knex(table.name).truncate()
      .then( () => knex(table.name).insert(table.data) );
  })
};
