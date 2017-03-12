import 'babel-polyfill';
import { expect } from 'chai';
import sinon from 'sinon';
import EcbService from '../../../src/services/ecbService';
import ConvertService from '../../../src/services/convertService';

describe('ServicesConvert', () => {
  describe('When Converting', () => {
    it('should contact the ECB to convert when its EURO', async () => {
      const api = new EcbService();
      sinon.stub(api, 'getExchangeRates', () => fakeExchangeRates);
      const service = new ConvertService(api);
      const expectedValue = service.convert({ from: 'EUR', to: 'USD', value: 100 });

      expect(expectedValue).to.have.property('from', 'EUR');
      expect(expectedValue).to.have.property('to', 'USD');
      expect(expectedValue).to.have.property('original', 100);
      expect(expectedValue).to.have.property('converted', 106.06);
    });

    it('should contact the ECB to convert from USD to EUR', async () => {
      const api = new EcbService();
      sinon.stub(api, 'getExchangeRates', () => fakeExchangeRates);
      const service = new ConvertService(api);
      const expectedValue = service.convert({ from: 'USD', to: 'EUR', value: 100 });

      expect(expectedValue).to.have.property('from', 'USD');
      expect(expectedValue).to.have.property('to', 'EUR');
      expect(expectedValue).to.have.property('original', 100);
      expect(expectedValue).to.have.property('converted', 94.28625306430322);
    });

    it('should contact the ECB to convert from BRL to USD', async () => {
      const api = new EcbService();
      sinon.stub(api, 'getExchangeRates', () => fakeExchangeRates);
      const service = new ConvertService(api);
      const expectedValue = service.convert({ from: 'BRL', to: 'USD', value: 100 });

      expect(expectedValue).to.have.property('from', 'BRL');
      expect(expectedValue).to.have.property('to', 'USD');
      expect(expectedValue).to.have.property('original', 100);
      expect(expectedValue).to.have.property('converted', 31.477414376446845);
    });
  });
});

const fakeExchangeRates = [
  {
    currency: 'USD',
    rate: 1.0606,
  },
  {
    currency: 'BRL',
    rate: 3.3694,
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
