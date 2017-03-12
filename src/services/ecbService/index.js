import jp from 'jsonpath';

export default function (api, url) {
  return {
    getExchangeRates: getRates.bind(this, api, url),
  };
}

const getRates = (api) => {
  const xml = api.get();
  const data = jp.query(JSON.parse(xml), '$..Cube[*].Cube[*].Cube');
  const result = data[0].map((el) => {
    return {
      currency: el.$.currency,
      rate: el.$.rate,
    };
  });

  return result;
};
