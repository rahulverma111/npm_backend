const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({path:'./config.env'});

// console.log(process.env.DATABASE);

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.DATABASE_PASS, {
    host: 'localhost',
    dialect:  'postgres' 
});

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((error)=>{ 
    console.error('Unable to connect to the database:',error);
});

const User = sequelize.define('User',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    contact:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
});

const UserFavPackage = sequelize.define('UserFavPackage',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    user_id:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
        
    },
    package:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false
    }


});

User.sync({alter:true});
UserFavPackage.sync({alter:true});

// User.hasMany(FavPackage);
// FavPackage.belongsTo(User);

// sequelize.sync();

module.exports = {User,UserFavPackage}
