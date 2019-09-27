const request = require("supertest");
const app = require("../../app");
const db = require('../../models')
describe("User controllers", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("It should response the POST method", done => {
    request(app)
      .post("/api/users")
      .send({ username: "andrew", email: "andrew@email" })
      .then(response => {
        expect(response.statusCode).toBe(201);
        expect(response.body.username).toBe("andrew");
        done();
      });
  });
  test("It should response the POST method", done => {
    request(app)
      .post("/api/users")
      .send({ username: "andrew", email: "andrew@email" })
      .then(response => {
        expect(response.statusCode).toBe(201);
        expect(response.body.username).toBe("andrew");
        done();
      });
  });
});
