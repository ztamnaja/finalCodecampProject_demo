const db = require("../models/index");
const { sequelize, Sequelize } = require("../models/index");
const Op = Sequelize.Op;

const getAllLocations = async (req, res) => {
  const allLocations = await db.Location.findAll();
  res.status(200).send(allLocations);
};

const getLocationById = async (req, res) => {
  console.log("req", req);
  const targetId = req.params.id;
  const locationById = await db.Location.findOne({
    where: {
      locationId: targetId,
    },
  });
  console.log("locationById: ", locationById);
  res.status(200).send(locationById);
};

const createLocation = async (req, res) => {
  const {
    locationId,
    locationName,
    locationLatitude,
    locationLongitude,
    locationInfoAddress,
    locationInfoPhoneNumber
  } = req.body;
  const newLocation = await db.Location.create({
    // should send only primary key and secondary key??or send only primary key
    locationId: locationId,
    locationName: locationName,
    locationLatitude: locationLatitude,
    locationLongitude: locationLongitude,
    locationInfoAddress: locationInfoAddress,
    locationInfoPhoneNumber: locationInfoPhoneNumber,
  });
  console.log("newLocation: ", newLocation);
  res.status(201).send(newLocation);
};

const updateLocation = async (req, res) => {
  const targetId = req.params.id;
  const { locationName } = req.body;
  await db.Location.update(
    {
      locationName: locationName,
      // ... all info
    },
    { where: { locationId: targetId } }
  );
  res.status(202).send(`update locationName: ${locationName} success.`);
};

const deleteLocation = async (req, res) => {
  const targetId = req.params.id;
  await db.Location.destroy({
    where: {
      locationId: targetId,
    },
  });
  // console.log(`delete locationId: ${locationId} success.`); // cannot get locationId
  res.status(204).send();
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
};
