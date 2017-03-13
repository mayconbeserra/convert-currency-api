import ConvertService from '../services/convertService';
import EcbService from '../services/ecbService';
import Api from '../services/ecbService/api';

export default async function convert (req, res) {
  const url = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
  const data = await ConvertService({
    service: EcbService(new Api(url)),
  }).convert(req.query);

  return res.status(200).json(data);
}
