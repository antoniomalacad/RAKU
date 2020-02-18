
exports.up = function(knex) {
  return knex.schema.createTable("quotes", function (table) {
    table.increments("id").primary();
    table.text("quote");
    table.string("author", 100);
    table.timestamp("created_at");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("quotes");
};
