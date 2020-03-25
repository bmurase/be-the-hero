const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        //a const entre colchetes faz com que
        //o retorno seja apenas da primeira
        //posição do array resultante da consulta
        const [count] = await connection('incidents')
            .count(); //total de registros

        /* console.log(count); 
        imprime count no terminal*/

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5) //esquema de paginacao
            .select(['incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf']);

        //setando um campo do cabeçalho da requisição
        //para informar o front-end sobre o total de registros existentes
        //X-Total-Count é nome padrão/por convenção
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' }); //http status code: unauthorized
        }

        await connection('incidents')
            .where('id', id)
            .delete();

        return response.status(204).send(); //no content: sucesso mas nenhum conteúdo para retornar
    }
};