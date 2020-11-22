'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Location', {
    locationId: {
      type: DataTypes.STRING(50),
      primaryKey: true,
       },
    locationName: {
      type: DataTypes.STRING(255),
    },
    locationLatitude: {
      type: DataTypes.INTEGER,
    },
    locationLongitude: {
      type: DataTypes.INTEGER,
    },
    locationInfoAddress: {
      type: DataTypes.STRING(255),
    },
    locationInfoPhoneNumber: {
      type: DataTypes.STRING(10),
    },
  }, {
    tableName: 'Locations',
    timestamps: false
  });

  model.associate = models => {
    model.hasMany(models.Reservation, { foreignKey: 'locationId' ,constraints: false})
  };

  model.associate = models => {
    model.belongsTo(models.Car, { foreignKey: 'carId' })
  }

  return model
}
