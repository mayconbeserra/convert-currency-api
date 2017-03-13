import 'babel-polyfill';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { application } from '../../src/app';

chai.use(chaiHttp);
const baseUrl = '/api/v1/convert';
let server;

describe(`Url --> ${baseUrl}`, async () => {
  before(async () => {
    server = await application();
  });

  describe('GET', async () => {
    it('should convert $100 USD to EUR', async () => {
      const url = `${baseUrl}?from=USD&to=EUR&value=100`;
      const expected = await chai.request(server).get(url);

      expect(expected.body).to.have.property('from', 'USD');
      expect(expected.body).to.have.property('to', 'EUR');
      expect(expected.body).to.have.property('original', '100');
      expect(expected.body).to.have.property('converted', 94.28625306430322);
    });

    it('should convert $100 BRL to EUR', async () => {
      const url = `${baseUrl}?from=BRL&to=EUR&value=100`;
      const expected = await chai.request(server).get(url);

      expect(expected.body).to.have.property('from', 'BRL');
      expect(expected.body).to.have.property('to', 'EUR');
      expect(expected.body).to.have.property('original', '100');
      expect(expected.body).to.have.property('converted', 29.678874577076037);
    });

    it('should convert $100 BRL to USD', async () => {
      const url = `${baseUrl}?from=BRL&to=USD&value=100`;
      const expected = await chai.request(server).get(url);

      expect(expected.body).to.have.property('from', 'BRL');
      expect(expected.body).to.have.property('to', 'USD');
      expect(expected.body).to.have.property('original', '100');
      expect(expected.body).to.have.property('converted', 31.477414376446845);
    });
  });
});
