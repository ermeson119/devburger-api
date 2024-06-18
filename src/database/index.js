import Sequelize from "sequelize";

import configDatabase from "../config/databese"

import User from "../App/models/User";

const models = [User]

class Database {
    constructor() {
        this.init()
    }

    init(){
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()