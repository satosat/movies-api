"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var pool = mysql_1.default.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
        "rejectUnauthorized": true
    }
});
var getConnection = function () {
    pool.getConnection(function (err, connection) {
        if (err)
            throw err;
    });
};
// const connection = mysql.createConnection("mysql://os63n68rny0n:pscale_pw_-_BKGEPUBZ6p7QBAQVzPxonwdAjMquhrOWc72IsCnkE@doxrmn4xabml.ap-southeast-2.psdb.cloud/movies?ssl={\"rejectUnauthorized\":true}")
exports.default = pool;
//# sourceMappingURL=db-config.js.map