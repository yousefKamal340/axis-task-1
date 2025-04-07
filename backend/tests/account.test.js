const request = require('supertest');
const app = require('../app');

describe('Fintech API', () => {
  let accountId = '';
  it('should open a new account', async () => {
    const res = await request(app).post('/api/accounts/open');
    expect(res.statusCode).toEqual(200);
    expect(res.body.accountId).toBeDefined();
    accountId = res.body.accountId;
  });

  it('should deposit funds', async () => {
    const res = await request(app).post(`/api/accounts/${accountId}/deposit`).send({ amount: 100 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.transactionId).toBeDefined();
  });

  it('should withdraw funds', async () => {
    const res = await request(app).post(`/api/accounts/${accountId}/withdraw`).send({ amount: 50 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.transactionId).toBeDefined();
  });

  it('should get the correct balance', async () => {
    const res = await request(app).get(`/api/accounts/${accountId}/balance`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.balance).toEqual(50);
  });
});
