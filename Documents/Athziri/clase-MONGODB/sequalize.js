const Sequelize= require ("sequelize");

const connection = new Sequelize ("datbase", "user", "pass" , {
    host: "localhost" ,
    dialect: "mysql" });

    const User= UserModel (connection, Sequelize);
    connection.sync ({force: true}).then (() =>{
        console.log ("Database and tables created/connected");
    });

    module.exports = {
        User
    };