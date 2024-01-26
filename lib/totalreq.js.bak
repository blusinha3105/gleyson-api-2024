const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./model/requests.json'))

const RequestsAdd = () => {
	ceemde[0].totalreq += 1
	fs.writeFileSync('./model/requests.json', JSON.stringify(ceemde))
}

module.exports = { RequestsAdd }