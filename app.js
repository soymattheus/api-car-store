const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const Cars = require("./routes/routeCars");

app.use("/cars", Cars);

app.use((req, res, next) => {
  const erro = new Error("Rota não encontrada");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = app;
