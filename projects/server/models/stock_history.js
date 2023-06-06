'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock_History.belongsTo(models.Products, {
        foreignKey: "product_id"
      })
    }
  }
  Stock_History.init({
    product_id: DataTypes.INTEGER,
    status: DataTypes.ENUM("Penambahan Stok", "Pengurangan Stok"),
    qty: DataTypes.INTEGER,
    reference: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stock-History',
  });
  return Stock_History;
};