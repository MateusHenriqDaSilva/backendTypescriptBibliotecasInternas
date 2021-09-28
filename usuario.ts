/// <reference path = "./tipos/AutenticacaoDeTipos.d.ts" />
import autenticacao = require("AutenticacaoDeTipos")

let mateus: autenticacao.usuario

mateus = {
    email: "mateus_silvah@hotmail.com",
    funcoes: ["superAdmin"]
}

let leliane: autenticacao.usuario

leliane = {
    email: "leliane_silvah@hotmail.com",
    funcoes: ["admin"],
    fonte: 'facebook'
}

