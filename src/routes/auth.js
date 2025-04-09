import express from 'express';

import { getUserByEmail, login, register, updateUserByEmail } from '../controllers/auth_controller.js';

const route = express.Router();

route.post('/login', login);
route.post('/register', register);
route.get('/user/:email', getUserByEmail);
route.put('/user/:email', updateUserByEmail);

export default route;
