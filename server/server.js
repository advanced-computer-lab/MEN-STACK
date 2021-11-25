const express = require("express");
const { routes } = require("./Routes/usercontroller");
const app = express();
const connectDB = require("./config/db");
const Port = process.env.Port || 3005;
const cors = require("cors");
const bodyParser = require("body-parser");
const flightsRouter = require("./Routes/FlightsRoutes");
const bookingFlightsRouter = require("./Routes/BookingFlightsRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

connectDB();
routes(app);

app.use("/flights", flightsRouter);
app.use("/bookingFlights", bookingFlightsRouter);

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

module.exports = { app };
