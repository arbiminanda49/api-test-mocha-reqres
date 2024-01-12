export const VALID_GET_USER_DETAIL_SCHEMA = {
  type: "object",
  required: ["data", "support"],
  properties: {
    data: {
      type: "object",
      required: ["id", "email", "first_name", "last_name", "avatar"],
      properties: {
        id: {
          type: "integer",
        },
        email: {
          type: "string",
        },
        first_name: {
          type: "string",
        },
        last_name: {
          type: "string",
        },
        avatar: {
          type: "string",
        },
      },
    },
  },
};
