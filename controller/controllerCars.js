const SearchCars = require("../data/dataSeacrCars");

module.exports = {
  async index(req, res, next) {
    const result = await SearchCars.execute(req);
    return result;
  },
};
