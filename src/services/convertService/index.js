export default function (ecbService) {
  return {
    convert: convert.bind(this, ecbService),
  };
}

const convert = async (ecbService, payload) => {
  const converted = payload.value * await getRate(ecbService.service, payload);

  return {
    from: payload.from,
    to: payload.to,
    original: payload.value,
    converted,
  };
};

const getRate = async (ecbService, payload) => {
  const rateBase = 1;
  const rates = await ecbService.getExchangeRates();

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
