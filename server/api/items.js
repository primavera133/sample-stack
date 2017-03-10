import Item from '../models/item'

const getItems = (request, reply) => {
  Item.find({}, (error, items) => {
    if (error) return reply(error).code(500)

    return reply(items).code(200)
  })
}

const addItem = (request, reply) => {
  Item.findOne({name: request.payload.name}, (error, item) => {
    if (error) return reply(error).code(500)

    if (item) return reply({error: 'Item already exists'}).code(400)

    item = new Item(request.payload)
    item.save(error => {
      if (error) return reply({error: error.message}).code(400)

      return reply(item).code(200)
    })
  })
}

const updateItem = (request, reply) => {
  Item.findOne({_id: request.params.id}, (error, item) => {
    if (error) return reply(error).code(500)

    const i = Object.assign(item, request.payload)

    i.save((error, doc) => {
      if (error) return reply({error: error.message}).code(400)

      return reply(doc).code(200)
    })
  })
}

const deleteItem = (request, reply) => {
  Item.findOne({_id: request.params.id}, (error, item) => {
    if (error) return reply(error).code(500)

    item.remove(error => {
      if (error) return reply({error: error.message}).code(400)
      return reply({id: request.params.id}).code(200)
    })
  })
}

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/api/items',
      config: {
        handler: getItems,
        auth: 'session'
      }
    },

    {
      method: 'POST',
      path: '/api/items',
      config: {
        handler: addItem,
        auth: 'session'
      }
    },

    {
      method: 'PUT',
      path: '/api/items/{id}',
      config: {
        handler: updateItem,
        auth: 'session'
      }
    },

    {
      method: 'DELETE',
      path: '/api/items/{id}',
      config: {
        handler: deleteItem,
        auth: 'session'
      }
    }
  ])

  next()
}

exports.register.attributes = {
  name: 'administrators'
}
