import {Sequelize} from 'sequelize'
// + new Sequelize(nombreDB, usuario, contraseña)
const db = new Sequelize('database_app', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql'
})

export default db