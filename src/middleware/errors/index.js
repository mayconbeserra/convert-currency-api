export default function (err, req, res) {
  if (err) {
    handleError(err, res);
  }
}

const handleError = (err, res) => {
  console.log(err); // eslint-disable-line
  return res.sendStatus(500);
};
