__path = process.cwd()
bla = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
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
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var { igstory} = require('../modulos/scrape.js');
var { fromBuffer } = require('file-type')
var gerarnick = require('../modulos/gerarnick.js')
var { mediafireDl } = require('../modulos/mediafire.js');
var buffer = require('../modulos/upload.js')
var exec = require('child_process');
var { Maker } = require('imagemaker.js')
var { pinterestVideoV2 } = require('../lib/pinterest.js') 
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('../modulos/funcoes.js')
var trans = require('@vitalets/google-translate-api')
const {savefrom} = require('../modulos/savefrom.js')
var xfar = require('xfarr-api')
const cors = require('cors')
const { wikimedia } = require("../lib/ScrapersNS/wikimedia.js")
const { wall } = require("../lib/ScrapersNS/scraper.js")
var { color } = require('../modulos/color.js')
const { fbdown } = require("../modulos/facebook.js")
const {  facebook } = require('../modulos/downloader')
const { gis } = require('../modulos/gimage')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('../lib/youtubev2.js')
var { nerding, gpwhatsapp, apkmody, pornhubsrc, uptodown, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('../lib/scraper.js')
var { igstalk } = require('../lib/scrape.js')
var { pensadorSearch, wallpaper2 } = require('../lib/scrapperlinda.js')
var { tiktok2, FacebookMp4 } = require('../lib/teste.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo } = require('../modulos/scraper/pesquisas.js')
var { kwai } = require('../lib/kwai.js')
var { InArtificial, CorretorOpenAi } = require('../lib/scrapper-vip.js')
var { getVideosPlaylist } = require('../lib/playlist.js')
var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('../modulos/scraper/noticias.js')
var { memesDroid } = require('../modulos/scraper/aleacrapper.js')
var { ringtone } = require('../modulos/scraper/ringtone.js')
var { LetradaMusica } = require('../lib/letraMusic.js')
const { aiovideodl, umma, ytPlay_3} = require('../lib/scraper-2.js');
const { randomGrupos } = require('../lib/groups-random.js');
const { EncoderApi } = require('../lib/functions.js');
var { mercadoLivreSearch2 } = require('../lib/scrapperlinda.js')
const { ytPlayMp3 } = require('../lib/ytmp3.js');
const { igdl } = require('../lib/igdl.js') 
const cfonts = require("cfonts")
const moment = require("moment-timezone");
const { performance } = require('perf_hooks');
const os = require('os')
//const { RequestsAdd } = require(bla + '/lib/totalreq.js');
const { pornhub } = require('../lib/pornhub.js');
const { xvideos } = require('../lib/xvideos.js');
const { xnxxsearch } = require('../lib/xnxx.js');
const yts = require('yt-search');
var { ytSearch } = require('../modulos/yt.js')
//const { youtubedl } = require('./node_modules/@bochilteam/scraper-sosmed/lib/cjs/src/youtube.js');

var chatGPTAPI = require('@danitech/chatgpt-api');
var { models } = chatGPTAPI;
var { chatGPT3, chatGPT35, chatGPT4 } = models;









criador = 'GLEYSON-BOTS'

var key = JSON.parse(fs.readFileSync("./database/Data/keys.json"));
const users = JSON.parse(fs.readFileSync("./database/Data/usuarios.json"));

async function listkeys(apikey, req) {
var i4 = key.map(i => i?.apikey)?.indexOf(apikey)
if(i4 >= 0) {
key[i4].request -= 2;
fs.writeFileSync("../database/Data/keys.json", JSON.stringify(key, null, 2));
await RequestsAdd(); 
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = users.map(i => i.key).indexOf(apikey);
if(i3 < 0 && !users.map(i => i.IP).includes(IP?.split(":")[3])){
users.push({key: apikey, IP: [IP?.split(":")[3]]})
fs.writeFileSync("../database/Data/usuarios.json", JSON.stringify(users, null, 2));
} else if(i3 >= 0 && !users[i3]?.IP.includes(IP?.split(":")[3])) {
users[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("../modell/usuarios.json", JSON.stringify(users, null, 2));
}}} 

var upload = multer()
//*** APIKEY USADA PARA GRAVAR VIDEO EM BREVE TERÁ QUE COMPRAR UMA. APENAS 40 REAIS***//



//*** chaves dessa api ****//


//*****//
var fs = require('fs');
var FormData = require('form-data');
var fetch = require('node-fetch');
var util = require('util');
var router  = express.Router();


var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/modulos/color.js');

precisos = {
    digitarapikey: {
        criador : `${criador}`,
        mensage: `digite parâmetro apikey!`
    }
}



///aqui esta o início das routers 

module.exports = router
