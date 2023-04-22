const {padWithLeadingZeros} = require('../common/padWithLeadingZeros')

exports.getUniqueIdForBook = (name , author , seq) => {
    const firstPart = name.slice(0,3)
    const secondPart = author.slice(0,3)
    const year = new Date().getFullYear()
    const lastPart = padWithLeadingZeros(seq , 6)

    const id = `${firstPart}-${secondPart}-${year}-${lastPart}`

    return id
}