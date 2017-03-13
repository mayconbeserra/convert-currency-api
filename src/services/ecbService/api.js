import request from 'superagent';
import xml2js from 'xml2js';

export default function api (url) {
  return {
    get: get.bind(this, url),
  };
}

const get = async (url) => {
  let result;
  const data = await request.get(url);
  const parser = new xml2js.Parser();
  parser.parseString(data.text, (er, res) => {
    result = JSON.stringify(res);
  });
  return result;
};
