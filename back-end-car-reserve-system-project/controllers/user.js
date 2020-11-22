const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken");

const registerUser = async (req,res) => {
  const { userName, password, email, phoneNumber } = req.body;
  // find userName in db (not duplicate)
  const targetUser = await db.User.findOne({ where: { userName: userName } });
  if (targetUser) {
    res.status(400).send({message: "Username is taken"})
  } else {
    // create hash password
    const salt = bcryptjs.genSaltSync(12);
    const hashPassword = bcryptjs.hashSync(password, salt)
    
    await db.User.create({
      userName: userName,
      password: hashPassword,
      email: email,
      phoneNumber: phoneNumber
    });
    res.status(201).send({ message: "User Created completa."})
  }
}

const loginUser = async (req, res) => {
  try {
    
  const { userName, password } = req.body;
  const targetUser = await db.User.findOne({ where: { userName: userName } });
  console.log("targetUser.dataValues", targetUser.dataValues.userName);

  if (!targetUser){
    res.status(400).send({ message: "userName or password is wrong." });
  } else {
    const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password)
    console.log("isCorrectPassword", isCorrectPassword);
    if (isCorrectPassword) {
      // generate JWT
      const payload = {
        name: targetUser.dataValues.userName,
        id: targetUser.dataValues.userId,
      };
      console.log("payload before send token", payload);
      const token = jwt.sign(payload, 'FinAlPRojecTcoDeCAmP', { expiresIn: 3600 })
      // const token = jwt.sign(payload, process.env.SECRET_OR_KEY, {
      //   expiresIn: 3600,
      // });
      
      res.status(200).send({
        token: token,
        message: "login Successful."
      })
    } else {
      res.status(400).send({ message: "userName or passwaor is wrong." });
    }
  }
  } catch (e) {
    console.log('error in loginUser:',e)
  }
}


const getAllUsers = async (req, res) => {
  const allUsers = await db.User.findAll()
  console.log('allUsers: ', allUsers);
  res.status(200).send(allUsers)
}

const getUserById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const UserById = await db.User.findOne({
    where: {
      userId: targetId
    }
  })
  console.log('UserById: ', UserById);
  res.status(200).send(UserById)
}

const createUser = async (req, res) => {
  const { userId, userName } = req.body
  const newUser = await db.User.create({
    userId: req.user.id,
    userName: userName,
  });
  console.log('newUser: ', newUser);
  res.status(201).send(newUser)
}

const updateUser = async (req, res) => {
  const targetId = req.params.id
  const { userName } = req.body
  await db.User.update({
    userName: userName
  }, { where: { userId: targetId } })
  res.status(202).send(`update userName: ${userName} success.`)
}

const deleteUser = async (req, res) => {
  const targetId = req.params.id
  await db.User.destroy({
    where: {
      userId: targetId
    }
  })
  console.log(`delete userId: ${userId} success.`);
  res.status(204).send()
}


module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}