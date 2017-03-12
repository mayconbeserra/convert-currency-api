import 'babel-polyfill';
import { expect } from 'chai';
import sinon from 'sinon';
import EcbService from '../../../src/services/ecbService';
import ConvertService from '../../../src/services/convertService';

describe('ServicesConvert', () => {
  describe('When receiving payload', () => {
    it('should contact the ECB to convert', async () => {
      const api = new EcbService();
      sinon.stub(api, 'getExchangeRates', () => fakeExchangeRates);
      const service = new ConvertService(api);
      const expectedValue = service.convert({ from: 'EUR', to: 'USD', value: 100 });

      expect(expectedValue).to.have.property('from', 'EUR');
      expect(expectedValue).to.have.property('to', 'USD');
      expect(expectedValue).to.have.property('original', 100);
      expect(expectedValue).to.have.property('converted', 106.73);
    });
  });
});

const fakeExchangeRates = [
  {
    currency: 'USD',
    rate: 1.0606,
  },
  {
    currency: 'EUR',
    rate: 1,
  },
  {
    currency: 'JPY',
    rate: 122.42,
  },
  {
    currency: 'BGN',
    rate: 1.9558,
  },
];
