const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op

const getAllCars = async (req, res) => {
  try {
    
  
  const allCars = await db.Car.findAll();
  console.log("allCars", allCars);
  res.status(200).send(allCars)
  } catch (e) {
    console.log(e)
}
}

const getCarById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const carById = await db.Car.findOne({
    where: {
      carId: targetId
    }
  })
  console.log('carById: ', carById);
  res.status(200).send(carById)
}

const createCar = async (req, res) => {
  console.log("req createCar:", req);
  try {
    const {
      carId,
      carName,
      carPrice,
      carBrandName,
      carInfoDoor,
      carInfoSeat,
      carInfoBags,
      carInfoGear,
      carInfoAC,
      carInfoRadio,
      // userId,
    } = req.body;
    console.log("req.body", req.body);
    const newCar = await db.Car.create(
      {
        // should send only primary key and secondary key??or send only primary key
        carId: carId,
        carName: carName,
        carBrandName: carBrandName,
        carPrice: carPrice,
        carInfoDoor: carInfoDoor,
        carInfoSeat: carInfoSeat,
        carInfoBags: carInfoBags,
        carInfoGear: carInfoGear,
        carInfoAC: carInfoAC,
        carInfoRadio: carInfoRadio,
        // userId: userId,
      },
      {timestamps: false}
    );
    console.log('newCar: ', newCar);
    // res.status(201).send(newCar)
    res.status(201).send(req.user);
  } catch (e) {
    console.log('error in createCar:',e)
  }

}

const updateCar = async (req, res) => {
  const targetId = req.params.id
  const { carName, carPrice } = req.body
  await db.Car.update({
    carName: carName,
    carPrice: carPrice,
  }, { where: { carId: targetId } })
  res.status(202).send(`update carName: ${carName} and carPrice: ${carPrice} success.`)
}

const deleteCar = async (req, res) => {
  const targetId = req.params.id
  await db.Car.destroy({
    where: {
      carId: targetId
    }
  })
  // console.log(`delete carId: ${carId} success.`); // cannot get carId
  res.status(204).send()
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
}