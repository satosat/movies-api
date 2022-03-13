"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var db_config_1 = __importDefault(require("./db-config"));
var app = (0, express_1.default)();
var port = process.env.PORT || 8000;
var conn = db_config_1.default.getConnection(function (e, c) {
    if (e)
        throw e;
    console.log("DB Connected");
    c.query("SELECT * FROM names", function (e, rows) {
        if (e)
            throw e;
        console.log(rows);
    });
});
app.use(index_1.default);
app.listen(port, function () {
    console.log("App running on http://localhost:".concat(port));
});
//# sourceMappingURL=app.js.map