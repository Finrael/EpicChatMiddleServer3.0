"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const conversationSchema_1 = __importDefault(require("../db/models/conversationSchema"));
// on this one we need to get all the conv ids and then use the socket io to conect to the room with the name of the ids 
router.post('/connectSockets', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const conversationData = yield conversationSchema_1.default.find({ _id: req.body.convId }, { participants: 1, creationTime: 1, _id: 1 });
    console.log('this is conversation data', conversationData);
    let aux = [];
    conversationData.map(m => {
        aux.push(m._id);
        // SocketIO.
    });
    res.json(aux);
}));
exports.default = router;
