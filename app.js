 
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require("path")
const { json } = require('body-parser');
const Aluno = require('./model/aluno');
const Professor = require('./model/professor')



//CONFIGURA O HANDLEBARS
app.engine("handlebars", handlebars({
    defaultLayout: "main",
    runtimeOptions: {allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true,},})
);
//CONTINUA CONFIRAÇÃO DO HANDLEBARS
//app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//CONFIGURA O BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || 3000


//cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

//login
app.get('/', (req, res) =>{
    res.render('login')
})

//home
app.post('/home', (req, res) =>{
    Alun0.findAll({
        where:{
            cpf:req.body.cpf,
            senha: req.body.senha
        }
    }).then((data) => {
        const cpf = data[0].get('cpf')
        const nome = data[0].get('nome')
        const matricula = data[0].get('matricula')
        req.session.nome = nome;               
    }).catch(()=>{
        res.render('login', {menssagemErro:true})
    })  
});

//cadastro
app.post('/cadastro', (req, res) =>{
    Usuario.create({
        cpf:req.body.cpf,
        nome:req.body.nome,
        matricula:req.body.matricula,
        email: req.body.email,
        senha:req.body.senha
    }).then(()=>{
        res.redirect('/usuarios')
    }).catch((error) =>{
        res.send("Erro ao cadastrar" + error)
    })    
})
// continuação
app.get('/usuarios', (req,res) =>{
    if(req.session.permissao == 1){
        Alunoo.findAll().then(function(usuarios){       
            res.render('aluno', {usuarios:usuarios})        
        });
    }else{
        res.redirect('/')
    }    
})

app.listen(port, () => {
    console.log("Servidor rodando");
})