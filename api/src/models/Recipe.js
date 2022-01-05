const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    spoonacularScore:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    analizedStructions:{
      type: DataTypes.TEXT,
      allowNull:true
    },
    image:{
      type: DataTypes.TEXT,
      allowNull:true
    },
    dataBase:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    
  });
};
/*ID: *
Nombre *
Resumen del plato *
Puntuación
Nivel de "comida saludable"
Paso a paso */
