const SuccessActionResult = (d) => ({ result: d });
const ErrorActionResult = (e) => ({ error: e });

const isSuccessResult = (i) => i && !i.error && i.result;
const isErrorResult = (x) => x && x.error && !x.result;

module.exports = {
  SuccessActionResult,
  ErrorActionResult,
  isSuccessResult,
  isErrorResult,
};
