const image = (sequelize, DataTypes) => {
  const imageSchema = {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    data: DataTypes.BLOB('long')
  };

  const Image = sequelize.define('image', imageSchema);

  return Image;
};

module.exports = image;