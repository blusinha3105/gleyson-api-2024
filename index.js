var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var fs = require('fs')
var axios = require('axios')
var mumaker = require('mumaker')
var jpeg = require('jpeg-js')
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
const { search } = require('yt-search');
var multer = require('multer')
var Ddos = require('ddos')
var TinyUrl = require('tinyurl');
var BitlyClient = require('bitly').BitlyClient
var chatGPTAPI = require('@danitech/chatgpt-api');

var { models } = chatGPTAPI;

var { chatGPT3, chatGPT35, chatGPT4 } = models;
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./functions.js');




var mainrouter = require('./routes/main'),
    api = require('./routes/api')
var key = JSON.parse(fs.readFileSync("./database/Data/keys.json"));

const users = JSON.parse(fs.readFileSync("./database/Data/usuarios.json"));

async function listkeys(apikey, req) {
var i4 = key.map(i => i?.apikey)?.indexOf(apikey)
if(i4 >= 0) {
key[i4].request -= 2;
fs.writeFileSync("./database/Data/keys.json", JSON.stringify(key, null, 2));
await RequestsAdd(); 
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = users.map(i => i.key).indexOf(apikey);
if(i3 < 0 && !users.map(i => i.IP).includes(IP?.split(":")[3])){
users.push({key: apikey, IP: [IP?.split(":")[3]]})
fs.writeFileSync("./database/Data/usuarios.json", JSON.stringify(users, null, 2));
} else if(i3 >= 0 && !users[i3]?.IP.includes(IP?.split(":")[3])) {
users[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("./database/Data/usuarios.json", JSON.stringify(users, null, 2));
}}} 
var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)
app.use('/api', api)
/*
app.get('/openai/gpt/gpt3', async (req, res, next) => {

//  var apikey = req.query.apikey

  var query = req.query.query
if (!query ) return res.json(loghandler.notquery) 
const response = await chatGPT35(query);

  res.json({
    status: true,
    criador: "gleyson",
    resposta: response,
  })
})

*/

app.get('/api/add-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({resultado: "Faltando o and"})
var [apikey, senha, rq] = a.split("&")
var senhaofc = "gley"
if(senha != senhaofc) return res.json({resultado: "Senha invalida.."})
if(!apikey) return res.json({resultado: "Kd a key.."})
if(key.map(i => i.apikey).includes(apikey)) {
return res.json({resultado: "Essa key já está inclusa dentro do sistema.."})
} else {
key.push({apikey: apikey, request: rq})
fs.writeFileSync("./database/Data/keys.json", JSON.stringify(key))
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
return res.json({resultado: `🔑 Chave ApiKey: ${apikey} Foi Adicionada ao Sistema com Exito!\n🚀 Numero de Requisições Disponiveis: ${key[ITC]?.request}`})
}
})

app.get('/api/del-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({msg: "Faltando o and"})
var [apikey, senha] = a.split("&")
var senhaofc = "gley"
if(senha != senhaofc) return res.json({msg: "Senha invalida.."})
if(!apikey) return res.json({msg: "Kd a key.."})
if(!key.map(i => i.apikey).includes(apikey)) {
return res.json({msg: "Essa key não está inclusa.."})
} else {
var i2 = key.map(i => i.apikey).indexOf(apikey)
key.splice(i2, 1)
fs.writeFileSync("./database/Data/keys.json", JSON.stringify(key))
return res.json({msg: `apikey ${apikey} deletada com sucesso..`})
}
})
app.get('/api/verificar-key',(req, res) => {
apikey = req.query.apikey;
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
if(ITC < 0) {
return res.json({key:' ❌ Sua apikey é invalida!! ❌'})
} else {return res.json({key:`Sua ApiKey está 100% ✅ - Requests Restantes: ${key[ITC]?.request}`})}})

console.log(banner3.string)
console.log(banner2.string)
app.listen(PORT, () => {
    console.log(color("Servidor rodando na porta " + PORT,'green'))
})
let xanax = require.resolve(__filename)
fs.watchFile(xanax, () => {
fs.unwatchFile(xanax)
console.log(`ATUALIZANDO REST API`)
process.exit()
})


module.exports = app
