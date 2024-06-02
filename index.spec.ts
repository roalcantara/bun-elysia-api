import { describe, expect, it } from 'bun:test';
import { app } from './index';

describe('Elysia API', () => {
  describe('GET /', () => {
    it('returns a greeting', async () => {
      const response = await app.handle(new Request('http://localhost:3000'));

      expect(response.status).toBe(200);
      expect(await response.text()).toBe('Hi');
    });
  });

  describe('GET /cats', () => {
    it('returns cats` list', async () => {
      const response = await app.handle(
        new Request('http://localhost:3000/cats')
      );

      expect(response.status).toBe(200);
      expect(await response.json()).toBeArray();
    });
  });
});
