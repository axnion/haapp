const addRunner     = require("./methods/add")
const getAllRunner  = require("./methods/getAll")
const getRunner     = require("./methods/get")
const updateRunner  = require("./methods/update")
const removeRunner  = require("./methods/remove")

function add(item) {
  return addRunner.run(item)
}

function getAll() {
  return getAllRunner.run()
}

function get(id) {
  return getRunner.run(id)
}

function update(item) {
  return updateRunner.run(item)
}

function remove(id) {
  return removeRunner.run(id)
}

function system() {
  return systemRunner.run()
}

module.exports = {
  add:      add,
  getAll:   getAll,
  get:      get,
  update:   update,
  remove:   remove,
  system:   system
}
