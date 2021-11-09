import { request200, request400 } from "../src/http";

test('response 200', () => {
  return request200().then(response => {
    expect(response.status).toBe(200);
  });
});

test('response 400', () => {
  return request400().catch(error => {
    expect(error.response.status).toBe(400);
  });
});
