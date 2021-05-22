'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.integer('image_id').unsigned()
      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
    })
  }

  down () {
    this.table('users', (table) =>
    {
      this.drop('image_id')
      // reverse alternations
    })
  }
}

module.exports = UserImageFkSchema
