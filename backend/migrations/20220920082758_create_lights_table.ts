import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('lights', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.text('description').notNullable();
        })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('lights')
}
