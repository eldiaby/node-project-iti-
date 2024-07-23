'use strict'

import express from 'express'
import { addPost, getAllPosts, updatePost, deldtePost } from './posts.controller.js';

const postsRoutes = express.Router();

postsRoutes.get('/post', getAllPosts)
postsRoutes.post('/post', addPost)
postsRoutes.put('/post/:id', updatePost)
postsRoutes.delete('/post/:id', deldtePost)

export default postsRoutes;