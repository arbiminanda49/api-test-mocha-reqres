import * as chai from "chai";
import UserAPI from "../../pages/users/users.api.js";
import * as data from "../../data/users/get-user-detail.data.js";
import jsonSchema from "chai-json-schema";
import * as schema from "../../schema/users/get-user-detail.schema.js";

const assert = chai.assert;
chai.use(jsonSchema);

describe("API User - Get User Detail", async function () {
  it("should success get user detail", async function () {
    const response = await UserAPI.getUserDetail(
      data.REQUEST_GET_USER_DETAIL_DATA.id
    );

    assert.equal(
      response.status,
      data.RESPONSE_VALID_GET_USER_DETAIL.http_code
    );
    assert.equal(
      response.data.data.email,
      data.RESPONSE_VALID_GET_USER_DETAIL.email
    );

    assert.jsonSchema(response.data, schema.VALID_GET_USER_DETAIL_SCHEMA);
  });
});
