require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");

const connectDatabase = require("./connect_database");
const cors = require("cors");
const formDataController = require("./formDataController");
app.use(
  cors(
    {
      origin: ["http://localhost:5173"],
      credentials: true,
      methods: ["POST", "GET", "PATCH"],
    } // allow requests from any origin with credentials (cookies)
  )
);
app.use(helmet());
app.use(bodyParser.json());
app.post("/api/formdata", formDataController.saveFormData);
connectDatabase(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected....");
    startServer();
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = 5000;
function startServer() {
  app.listen(port, () => {
    console.log(`Server started on port ${port} .....`);
  });
}
