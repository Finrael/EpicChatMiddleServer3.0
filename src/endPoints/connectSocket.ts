// imports
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
const router = express.Router();
import jwt, { verify } from 'jsonwebtoken';
import JWTSECRET from '../constants';
import passportJWT from 'passport-jwt';
import conversation from '../db/models/conversationSchema';
import { Types, Schema } from "mongoose";
import SocketIO from 'socket.io';
// on this one we need to get all the conv ids and then use the socket io to conect to the room with the name of the ids 
router.post('/connectSockets',  async (req, res) => {

        const conversationData = await conversation.find({ _id: req.body.convId }, { participants: 1, creationTime: 1, _id:1 })
        console.log('this is conversation data', conversationData)
       
        let aux:any=[];
        conversationData.map(m=>{
            aux.push(m._id);
            // SocketIO.
        })
        res.json(aux);

});
export default router;