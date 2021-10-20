import express from 'express';

import { createUser, getUser, getUserWithId, deleteUser, patchUser } from '../constrollers/users.js';

const router = express.Router();

router.get('/', getUser);

router.post('/', createUser);


router.get('/:id', getUserWithId);


router.delete('/:id', deleteUser);


router.patch('/:id', patchUser);

export default router;
