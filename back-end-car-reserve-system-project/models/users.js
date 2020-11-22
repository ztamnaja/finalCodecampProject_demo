'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    userName: {
      type: DataTypes.STRING(255),
    }, 
    password:{
      type: DataTypes.STRING(255)
    },
    email:{
      type: DataTypes.STRING(255)
    },
    phoneNumber:{
      type: DataTypes.STRING(255)
    },
  }, {
    tableName: 'Users',
    timestamps: false
  });

  model.associate = models => {
    model.hasMany(models.Reservation, { foreignKey: 'userId'})
  };
  return model
}