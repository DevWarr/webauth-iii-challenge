
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("user_id")
      tbl.string("username")
        .notNullable()
        .unique()
      tbl.string("password")
        .notNullable()
  })
  .createTable("roles", tbl => {
      tbl.increments("role_id")
      tbl.string("role_name")
        .notNullable()
        .unique();
  })
  .createTable("userroles", tbl => {
      tbl.increments("ur_id")
      tbl.integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl.integer("role_id")
        .unsigned()
        .references("role_id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists("userroles")
          .dropTableIfExists("roles")
          .dropTableIfExists("users")
};
