const request = require("supertest");
const app = require("../App");

describe("states endpoint", () => {
  it("should send a response code of 200", async () => {
    const response = await request(app).get("/v1/api/states");
    expect(response.body).toHaveLength(25);
    expect(response.status).toEqual(200);
  });
});
