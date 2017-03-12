import { expect } from 'chai';
import sinon from 'sinon';

describe('Presenter - Convert', () => {
  describe('When receiving payload', () => {
    it('should contact the ECB', async () => {
      const api = new ecbService();
      sinon.stub(api, 'getExchangeRates', fakeExchangeRates);
      const service = new ConvertService(api);
      service.convert({ from: 'EUR', to: 'USD', value: 100 });
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
