const fs = require("fs");

const caminho = __dirname + "/arquivo.json"

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf8")
console.log(conteudo)

// assincrono...
fs.readFile(caminho, "utf8", ()=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require