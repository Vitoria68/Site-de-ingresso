
const mongodb = require('mongodb')
// cria uma instância do cliente do mongo
const ClienteMongo = mongodb.MongoClient;
var cliente;
// estabelece conexão com o Banco de Dados
const conexao_bd = async () => {
    if (!cliente)
        cliente = await ClienteMongo.connect('mongodb://127.0.0.1:27017');
}
// retorna o referência para o banco de dados da aplicação
const bd = () => {
    return cliente.db('usuarios');
}
class UsuarioMongo {
    async close() {
        if (cliente)
            cliente.close()
        cliente = undefined
    }
     async atualiza(nome, email, cpf, senha, nomeCartao, numero, validade,cvv) {
        await conexao_bd();
        const usuario = new usuario(nome, email, cpf, senha, nomeCartao, numero, validade,cvv)
        const colecao = bd().collection("usuarios")
        await colecao.updateOne(
            { cpf: cpf },
            { $set: { nome: nome, email:email, senha:senha, nomeCartao:nomeCartao, numero:numero, validade:validade, cvv:cvv } }
        )
        return usuario
    }

   async cria(cnome, email, cpf, senha, nomeCartao, numero, validade,cvv) {
        await conexao_bd()
        const usuario = new usuario(nome, email, cpf, senha, nomeCartao, numero, validade,cvv)
        const colecao = bd().collection("usuarios")
        await colecao.insertOne({ nome: nome, email:email, senha:senha, nomeCartao:nomeCartao, numero:numero, validade:validade, cvv:cvv})
        return usuario
    }
    async consulta(cpf) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        const doc = await colecao.findOne({ cpf: cpf })
        const usuario = new usuario(doc.nome, doc.email, doc.cpf, doc.senha, doc.nomeCartao, doc.numero, doc.validade,doc.cvv)
        return usuario
       
    }

    async lista() {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        var usuarios = await colecao.find({}).toArray()

        return usuarios
    }
     async deleta(cpf) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        const doc = await colecao.findOne({ cpf: cpf })
        if (!doc) {
            throw new Error(`Não existe a usuario com cpf: ${cpf}`)
        } else {
            await colecao.findOneAndDelete({ cpf: cpf })
        }
    }


    async consultaporEmail(email) {
        await conexao_bd();
        const colecao = bd().collection("usuarios")
        var email = await colecao.findOne({ email: email });
        return email
    }

    async lista_cpfs() {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        var cpfs = []
        await colecao.find({}, { projection: { _cpf: 0, cpf: 1 } }).forEach((usuario) => {
            cpfs.push(usuario.cpf)
        })
        return cpfs
    }
}
module.exports = new UsuarioMongo()