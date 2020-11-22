const db = require("./models/index");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const router = express.Router();
const carRoute = require("./routes/car");
const serviceRoute = require("./routes/service");
const locationRoute = require("./routes/location");
const userRoute = require("./routes/user");
const reservationRoute = require("./routes/reservation");
const port = 8000;

require ('./config/passport/passport') // run jwt passport 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/Car", carRoute);
app.use("/Service", serviceRoute);
app.use("/Location", locationRoute);
app.use("/User", userRoute);
app.use("/Reservation", reservationRoute);

// {force:true} drop and create new table whrn we update. // force: false when run node on port (data not disable)
db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CarReserveSystem application." });
});


