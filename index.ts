import Elysia from 'elysia';
import { catController } from './src/controllers/cat.controller';

export const app = new Elysia()
  .get('/', () => 'Hi')
  .use(catController)
  .listen(3000);
