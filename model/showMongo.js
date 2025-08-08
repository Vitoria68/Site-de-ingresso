const mongodb = require('mongodb')

const ClienteMongo = mongodb.MongoClient;
var cliente;

const conexao_bd = async () => {
    if (!cliente)
        cliente = await ClienteMongo.connect('mongodb://127.0.0.1:27017');
}

const bd = () => {
    return cliente.db('shows');
}

class ShowMongo {
    async close() {
        if (cliente) cliente.close()
        cliente = undefined
    }
async atualiza(show) {
        await conexao_bd();
        const colecao = bd().collection("shows")
        await colecao.updateOne(
            { id: show.id },
            { $set: { nome: show.nome, data: show.data, imagem: show.imagem, horario: show.horario, abertura: show.abertura, endereco: show.endereco, classificacao: show.classificacao, capacidade: show.capacidade, valor: show.valor } }
        )
    }

    async cria(show) {
        await conexao_bd()
        const colecao = bd().collection("shows")
        const existe = await colecao.findOne({id: show.id});
        if(!existe){
            await colecao.insertOne(show);
        }
    }
    async consulta(id) {
        await conexao_bd()
        const colecao = bd().collection("shows")
        const show = await colecao.findOne({ id: id })
        return show
    }
    async deleta(id) {
        await conexao_bd()
        const colecao = bd().collection("shows")
        const doc = await colecao.findOne({ id: id })
        if (!doc) {
            throw new Error(`Não existe a show com id: ${id}`)
        } else {
            await colecao.findOneAndDelete({ id: id })
        }
    }
    async lista() {
        await conexao_bd()
        const colecao = bd().collection("shows")
        var shows = await colecao.find({}).toArray()
        return shows
    }
    async lista_ids() {
        await conexao_bd()
        const colecao = bd().collection("shows")
        var ids = []
        await colecao.find({}, { projection: { _id: 0, id: 1 } }).forEach((show) => {
            ids.push(show.id)
        })
        return ids
    }
    async qtd() {
        await conexao_bd()
        const colecao = bd().collection("shows")
        const qtd = await colecao.count({})
        return qtd
    }
    


}



module.exports = new ShowMongo()
