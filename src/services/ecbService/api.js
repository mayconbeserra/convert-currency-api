// import request from 'superagent';
export default function () {
  return {
    get: get.bind(this),
  };
}

const get = () => {
  console.log('get');
};
