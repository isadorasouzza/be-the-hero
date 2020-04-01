const request = require('supertest');
const app = require('../../../src/app');
const connection = require('../../../src/database/connection');

describe('ONG', () =>{
    beforeEach( async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    beforeEach( async() => {
        await connection.destroy();
    });

    it('it should be able to create a new ONG', async() =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Fazenda das Fadas",
                email: "contatofadas@email.com.br",
                whatsapp: "123456789",
                city: "Rio de Janeiro",
                uf: "RJ"  
            });

           expect(response.body).toHaveProperty('id');
           expect(response.body.id).toHaveLength(8);
    });
});