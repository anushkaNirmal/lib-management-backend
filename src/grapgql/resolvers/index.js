const userResolvers = require('./user')
const bookResolvers = require('./book')

const rooteResolver = {
    ...userResolvers,
    ...bookResolvers
}

module.exports = rooteResolver