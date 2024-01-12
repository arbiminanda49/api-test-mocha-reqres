import BaseAPI from "../base.api.js";

const prefixUserAPI = "/api/users";

const UserAPI = {
  getUserDetail: (user_id) => BaseAPI.get(`${prefixUserAPI}/${user_id}`),
};

export default UserAPI;
