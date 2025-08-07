
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
    
    async cria(usuario) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        await colecao.insertOne(usuario)
    }

    async consulta(cpf) {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        const usuario = await colecao.findOne({ cpf: cpf })
        return usuario
    }

    async lista() {
        await conexao_bd()
        const colecao = bd().collection("usuarios")
        var usuarios = await colecao.find({}).toArray()

        return usuarios
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