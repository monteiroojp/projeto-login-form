//Not found middleware
const notFound = (req, res) => res.status(404).send(`The recourse that you are trying to find doesn't exist!`)

module.exports = notFound
