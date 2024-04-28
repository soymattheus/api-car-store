const router = require("express").Router();
const SearchCars = require("../controller/controllerCars");

router.get("/query", async function (req, res, next) {
  try {
    const cars = await SearchCars.index(req);
    res.status(200).send(cars);
  } catch (error) {
    error.message = "Erro ao consultar";
    next(error);
  }
});

module.exports = router;
