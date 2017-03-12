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
    return getRateTo(rates, payload.to);
  }

  if (payload.to === 'EUR') {
    return rateBase / getRateFrom(rates, payload.from);
  }

  const rateFrom = getRateFrom(rates, payload.from);
  const rateTo = getRateTo(rates, payload.to);

  return rateTo * (rateBase / rateFrom);
};

const getRateFrom = (rates, from) => rates.find(el => el.currency === from).rate;
const getRateTo = (rates, to) => rates.find(el => el.currency === to).rate;
