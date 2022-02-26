const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

const employees = require('./funcionarios.json')

function writeFile(cb) {
    fs.writeFile(
        path.join(__dirname, "funcionarios.json"), 
        JSON.stringify(employees, null, 2),
        err => {
            if(err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
    )
}

http.createServer((req, res) => {
    //Coletar informações da URL
    const {nome,email,data_nasc,salario,cargo} = URL.parse(req.url, true).query
    console.log(URL.parse(req.url, true).query)
    //Permissão de navegador
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if(!nome)
        return res.end(JSON.stringify(employees))

    //Adicionar funcionarios
    if(nome,email,data_nasc,salario,cargo){
        employees.Funcionario.push({nome,email,data_nasc,salario,cargo})
        return writeFile((message) => res.end(message)) 
    }
        

    
   
}).listen(3000, () => console.log('Api is running'))