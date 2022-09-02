const shortid = require('shortid')

function generate() {
    let id = shortid.generate()
    id = id.replace(/-/g, 'ictak').replace(/_/g, 'ictak')
    return id
}

module.exports = generate