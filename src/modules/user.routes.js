"use strict"

import exprees from "express";
import { add, deleteUser, get, update } from "./users.controller.js";
const userRoutes = exprees.Router()

//the get method
userRoutes.get('/user', get);


// the post method
userRoutes.post('/user',add)



// delete method
userRoutes.delete('/user:idValue', deleteUser)



//update method
userRoutes.put('/user:id', update);

export default userRoutes;