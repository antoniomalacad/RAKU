
exports.up = function(knex) {
  return knex.schema.createTable("emails", function (table) {
    table.increments("id").primary();
    table.string("email");
    table.string("time").index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("emails");
};
