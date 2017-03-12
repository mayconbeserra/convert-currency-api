import { expect } from 'chai';
import sinon from 'sinon';
import xml2js from 'xml2js';
import path from 'path';
import fs from 'fs';
import EcbService from '../../../src/services/ecbService';
import Api from '../../../src/services/ecbService/api';

describe('ECB Service', () => {
  describe('When getting the exchange rates', () => {
    it('should convert an XML to json', async () => {
      const api = new Api();
      sinon.stub(api, 'get', fakeXML);

      const service = new EcbService(api, '');

      const expectedValue = service.getExchangeRates();

      expect(expectedValue[0]).to.have.property('currency', 'USD');
      expect(expectedValue[0]).to.have.property('rate', '1.0606');
      expect(expectedValue[1]).to.have.property('currency', 'JPY');
      expect(expectedValue[1]).to.have.property('rate', '122.42');
    });
  });
});

const fakeXML = () => {
  let ret;
  const data = fs.readFileSync(path.join(__dirname, '/rates.xml'));
  const parser = new xml2js.Parser();
  parser.parseString(data, (er, result) => {
    ret = JSON.stringify(result);
  });
  return ret;
};
