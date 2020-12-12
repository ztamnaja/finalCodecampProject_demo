"use strict";

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Car",
    {
      carId: {
        type: DataTypes.STRING(50),
        primaryKey: true,
      },
      carName: {
        type: DataTypes.STRING(255),
      },
      carBrandName: {
        type: DataTypes.STRING(255),
      },
      carPrice: {
        type: DataTypes.INTEGER,
      },
      // or keep in new table???
      carInfoDoor: {
        type: DataTypes.INTEGER,
      },
      carInfoSeat: {
        type: DataTypes.INTEGER,
      },
      carInfoBags: {
        type: DataTypes.INTEGER,
      },
      carInfoGear: {
        type: DataTypes.STRING(64),
      },
      carInfoAC: {
        type: DataTypes.STRING(64),
      },
      carInfoRadio: {
        type: DataTypes.STRING(64),
      },
      carImgSrc: {
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: "Cars",
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.hasOne(models.Reservation, { foreignKey: "carId" });
    model.hasOne(models.Location, { foreignKey: "carId" });
  };
  model.associate = (models) => {
    model.belongsTo(models.Service, { foreignKey: "serviceId" });
  };
  return model;
};
