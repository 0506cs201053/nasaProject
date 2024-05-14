const request=require("supertest");
const app=require('../../app');

const {mongoConnect}=require('../../services/mongo');

describe('Test Get /launches', ()=>{
    test('It should respond with 200 success', async()=>{
        const response=await request(app)
        .get('/v1/launches')
        .expect('Content-Type',/json/)
        .expect(200);
    });
});

describe('Test POST /launches',()=>{
    const completeLaunchDate={
        mission:'USS Enterprise',
        rocket:'NCC 1701-D',
        target:'Kepler-186 f',
        launchDate:'January 4, 2028',
    };
    test('It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/v1/launches')
            .send(completeLaunchDate)
            .expect('Content-Type', /json/)
            .expect(201);
    });
})