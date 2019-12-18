const Validator = require('jsonschema').Validator;

const validator = (path, schema) => {
  const v = new Validator();

  const result = v.validate(path, schema);
  return result;
};

module.exports = validator;
