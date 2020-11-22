const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op

const getAllServices = async (req, res) => {
  const AllServices = await db.Service.findAll()
  res.status(200).send(AllServices)
}

const getServiceById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const ServiceById = await db.Service.findOne({
    where: {
      serviceId: targetId
    }
  })
  console.log('ServiceById: ', ServiceById);
  res.status(200).send(ServiceById)
}

const createService = async (req, res) => {
  const { serviceId, serviceName, servicePrice } = req.body
  const newService = await db.Service.create({
    serviceId: serviceId,
    serviceName: serviceName,
    servicePrice: servicePrice
  })
  console.log('newService: ', newService);
  res.status(201).send(newService)
}

const updateService = async (req, res) => {
  const targetId = req.params.id
  const { serviceName, servicePrice } = req.body
  await db.Service.update({
    serviceName: serviceName,
    servicePrice: servicePrice,
  }, { where: { serviceId: targetId } })
  res.status(202).send(`update serviceName: ${serviceName} and servicePrice: ${servicePrice} success.`)
}

const deleteService = async (req, res) => {
  const targetId = req.params.id
  await db.Service.destroy({
    where: {
      serviceId: targetId
    }
  })
  // console.log(`delete serviceId: ${serviceId} success.`);
  res.status(204).send()
}


module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
}