const Contact = require("./schemas/contacts");

const getAll = async () => {
  return Contact.find();
};

const getById = (id) => {
  return Contact.findOne({ _id: id });
};

const create = ({ name, email, phone }) => {
  return Contact.create({ name, email, phone });
};

const update = (id, fields) => {
  return Contact.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const remove = (id) => {
  return Contact.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
