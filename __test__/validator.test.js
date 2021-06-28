const { server } = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
  it('Should return name', async () => {
    const query = 'rula'
    const response = await mockRequest.get(`/person?name=${query}`);
    expect(response.body.name).toEqual(query)
    expect(response.status).toBe(200)
  })
  it('enter a number', async () => {

    const response = await mockRequest.get(`/person?name=1`);

    expect(response.status).toBe(500)
  })
  it('no name', async () => {

    const response = await mockRequest.get(`/person`);

    expect(response.status).toBe(500)
  })
})
