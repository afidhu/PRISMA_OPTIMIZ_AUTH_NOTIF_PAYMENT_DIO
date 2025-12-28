
import { app, prisma } from "../../index.ts";
import request from "supertest";


// describe('POST /login', () => {
//   beforeAll(async () => {
//     // setup DB
//   });

//   it('returns 200 on success', async () => {
//     expect(200).toBe(200);
//   });

//   it('returns 401 on wrong password', async () => {
//     expect(401).toBe(401);
//   });
// });



describe('Posts test', ()=>{

    afterAll(async () => {
       prisma.$disconnect();
       
    });
    
//     afterEach(() => {
//   jest.clearAllTimers();
// });
    it('should get all Posta', async()=>{
        const resp = await request(app).get('/post')
        expect(resp.status).toBe(200)
        // expect(resp.status).toEqual(200)
        // expect(resp.status).toBe(404)   

    });

    it('add Posts must return 201', async()=>{
        //  const userList = [{ title: "ashagmaico", content: "asha1", published: false, authorId: 1 }, { title: "juma.com1", content: "juma1", published: true, authorId: 2 }, { title: "ashagmaico2", content: "asha2", published: false, authorId: 4 }, { title: "juma.com2", content: "juma2", published: true, authorId: 5 },]
        const user = { title: "testtitle", content: "testcontent", published: true, authorId: 1 }
       const resp = await request(app).post('/post').send(user)
       expect(resp.status).toBe(201)
    })

    it("Missing Body  data", async()=>{
        const resp = await request(app).post('/post').send({})
        expect(resp.status).toBe(500)
        expect(resp.body).toBeDefined()
        expect(resp.body).toContain("errror at")
    })

    it('update Post must return 200', async()=>{
        const user = { title: "updated title", content: "updated content", published: true }
       const resp = await request(app).put('/post/1').send(user)
       expect(resp.status).toBe(200)
    })

    it('delete Post must return 204', async()=>{
       const resp = await request(app).delete('/post/1')
       expect(resp.status).toBe(204)
    })


})