import jp from 'jsonpath';

export default function base (api) {
  return {
    getExchangeRates: getExchangeRates.bind(this, api),
  };
}

const getExchangeRates = async (api) => {
  const xml = await api.get();
  const data = await jp.query(JSON.parse(xml), '$..Cube[*].Cube[*].Cube');

  const result = data[0].map((el) => {
    return {
      currency: el.$.currency,
      rate: el.$.rate,
    };
  });

  return result;
};
