import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('studentdb', 'root', 'pass@word1', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

export default sequelize;