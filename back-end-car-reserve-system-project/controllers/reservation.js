const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op

const getAllReservations = async (req, res) => {
  // const allReservations = await db.Reservation.findAll({ include : [db.Uesr]}) // pull item from User table.
  const allReservations = await db.Reservation.findAll({
    where: { userId: req.user.userId },
  });
  res
    .status(200)
    // .send({ user: req.user, "List allReservations": allReservations });
    .send({ "List allReservations": allReservations });
}


const getReserveById = async (req, res) => {
  console.log("req", req);
  const targetId = req.params.id; // reserveId that will send in pathparameter 
  const reserveById = await db.Reservation.findOne({
    where: {
      reserveId: targetId,
      userId: req.user.userId, // specific get only reserve of this userId 
    },
  });
  console.log("reserveById: ", reserveById);
  res.status(200).send(reserveById);
}

const createReserve = async (req, res) => {
  const {  reserveStatus ,reserveTotalPrice,carId, locationId,userId,pickupLocationId,returnLocationId,pickupDateTime,returnDateTime} = req.body
  const newReserve = await db.Reservation.create({ // should send only primary key and secondary key??or send only primary key
    // reserveId: reserveId,
    reserveDate: Date.now(),
    reserveStatus: reserveStatus,
    reserveTotalPrice: reserveTotalPrice,
    userId: userId,
    carId: carId,
    pickupLocationId: pickupLocationId,
    returnLocationId: returnLocationId,
    pickupDateTime: pickupDateTime,
    returnDateTime: returnDateTime,
  })
  console.log('newReserve: ', newReserve);
  res.status(201).send(newReserve)
}

const updateReserve = async (req, res) => {
  const targetId = req.params.id
  const {reserveStatus} = req.body
  const targetReserve = await db.User.fineOne({
    where: { userId: targetId, userId: req.user.userId },
  });
  if (targetReserve) {
    await db.Reservation.update(
      {
        reserveStatus: reserveStatus,
      },
      { where: { reserveId: targetId, userId: req.user.userId } }
    );
    res.status(202).send(`update reserveStatus: ${reserveStatus} success.`);
  } else {
    res.status(404).send({ message: "reservation not found." });
  }
}

const deleteReserve = async (req, res) => {
  const targetId = req.params.id
  const targetReserve = await db.User.fineOne({
    where: { userId: targetId, userId: req.user.userId },
  });
if (targetReserve) {
  await db.Reservation.destroy({
    where: {
      reserveId: targetId,
      userId: req.user.UserId,
    },
  });
  // console.log(`delete reserveId: ${reserveId} success.`); // cannot get reserveId
  res.status(204).send()
  } else {
    res.status(404).send({ message: "reservation not found." });
  }
}

module.exports = {
  getAllReservations,
  getReserveById,
  createReserve,
  updateReserve,
  deleteReserve,
}