'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Reservation', {
    reserveId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    reserveDate: {
      type: DataTypes.DATE,
    },
    // reserveTime
    reserveStatus: {
      type: DataTypes.STRING(64), 
    },
    reserveTotalPrice: {
      type: DataTypes.INTEGER,
    },
    
    pickupLocationId: {
      type: DataTypes.STRING(64),
      // references: {
      //   model: 'Location',
      //   key: 'locationId'
      //   } 
    },
    returnLocationId: {
      type: DataTypes.STRING(64), 
      // references: {
      //   model: 'Location',
      //   key: 'locationId'
      //   } 
    },
    pickupDateTime: {
      type: DataTypes.DATE,
    },
    returnDateTime: {
      type: DataTypes.DATE,
    },
    
    // companyId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //   model: 'Companies',
    //   key: 'id'
    //   }
    // }
  }, {
    tableName: 'Reservations',
    timestamps: false
  })

  model.associate = models => {
    model.belongsTo(models.Car, { foreignKey: 'carId' })
    model.belongsTo(models.Service, { foreignKey: 'serviceId' })
    model.belongsTo(models.Location, { foreignKey: 'locationId' })
    model.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return model
}