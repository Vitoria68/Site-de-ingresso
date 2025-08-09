
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
    async atualiza(usuario) {
        await conexao_bd();
        const colecao = bd().collection("usuarios")
        await colecao.updateOne(
            { cpf: usuario.cpf },
            { $set: {  nome: usuario.nome, email: usuario.email, senha: usuario.senha, nomeCartao: usuario.nomeCartao, numero: usuario.numero, validade: usuario.validade, cvv: usuario.cvv} }
        )
    }
   
    async cria(usuario) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        await colecao.insertOne(usuario)
    }
    async consulta(cpf) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        const usuario = await colecao.findOne({cpf:cpf})
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