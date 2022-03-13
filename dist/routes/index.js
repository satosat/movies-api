"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/api/movies', function (req, res) {
    res.send("200");
});
router.get('/api/movies/:id', function (req, res) {
    var id = req.params.id;
    res.send("".concat(id));
});
exports.default = router;
//# sourceMappingURL=index.js.map