'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Service', {
    serviceId: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    serviceName: {
      type: DataTypes.STRING(255),
    },
    servicePrice: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'Services',
    timestamps: false
  });

  model.associate = models => {
    model.hasOne(models.Reservation, { foreignKey: 'serviceId' })
    model.hasOne(models.Car, { foreignKey: 'serviceId' })
  };
  return model
}
