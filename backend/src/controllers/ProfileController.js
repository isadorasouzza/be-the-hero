const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where ('ong_id',ong_id)
            .select('*');
     
        return response.json(incidents);
     },

     /* Nova funcionalidade */
     async update (request, response) {
        const {title, discription, value} = request.body;
        const incident_id = request.headers.incident;
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permited'});
        }
        
        await connection('incidents').update({
                title,
                discription,
                value,
                ong_id,
         }).where('id',id);
        
         return response.json({title, discription, value});
        
    }


};

 