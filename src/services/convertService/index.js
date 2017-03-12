export default function (api) {
  return {
    convert: convert.bind(this, api),
  };
}

const convert = (api, payload) => {
  const convertedValue = payload.value * getRate(api, payload);

  return {
    from: payload.from,
    to: payload.to,
    original: payload.value,
    converted: convertedValue,
  };
};

const getRate = (api, payload) => {
  const rateBase = 1;
  const rates = api.getExchangeRates();

  if (payload.from === 'EUR') {
    return rates.find(el => el.currency === payload.to).rate;
  }

  if (payload.to === 'EUR') {
    return rateBase / rates.find(el => el.currency === payload.from).rate;
  }

  const rateFrom = rates.find(el => el.currency === payload.from).rate;
  const rateTo = rates.find(el => el.currency === payload.to).rate;

  return rateTo * (rateBase / rateFrom);
};
