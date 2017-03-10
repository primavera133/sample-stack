import config from 'config'
import CookieAuth from 'hapi-auth-cookie'

const login = (request, reply) => {
  if (!request.payload.username || !request.payload.password) {
    return reply({message: 'Missing username or password'}).code(401)
  }

  if (request.payload.username === config.get('auth.username') &&
      request.payload.password === config.get('auth.password')) {

      const { username } = request.payload

      request.cookieAuth.set({username})

      reply({username}).code(200)
  } else {
    reply({message: 'Wrong username or password'}).code(401)
  }
}

const logout = (request, reply) => {
  request.cookieAuth.clear()
  reply({message: 'auth/logout'})
}

exports.register = (server, options, next) => {
  server.register(CookieAuth, (error) => {
    if (error) throw error

    server.auth.strategy('session', 'cookie', {
      password: config.get('auth.key'),
      isSecure: process.env.NODE_ENV === 'production',
      isHttpOnly: true
    })

    server.route([
      {
        method: 'POST',
        path: '/auth/login',
        config: {
          handler: login,
          auth: {
            mode: 'try',
            strategy: 'session'
          },
          plugins: {
            'hapi-auth-cookie': {
              redirectTo: false
            }
          }
        }
      },

      {
        method: 'GET',
        path: '/auth/logout',
        config: {
          handler: logout,
          auth: 'session'
        }
      }
    ])

    next()
  })
}

exports.register.attributes = {
  name: 'auth'
}
