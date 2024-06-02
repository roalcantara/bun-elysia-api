import Elysia from 'elysia';
import { getCats } from '../services/cat.service';

export const catController = new Elysia<'/cat'>();

catController.get('/cats', getCats);
