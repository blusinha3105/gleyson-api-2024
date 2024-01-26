const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./database/Data/requests.json'))

const RequestsAdd = () => {
	ceemde[0].totalreq += 1
	fs.writeFileSync('./database/Data/requests.json', JSON.stringify(ceemde))
}

module.exports = { RequestsAdd }