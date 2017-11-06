import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "8001";
const PROTOCOL = "https";

export async function callAuthenticate (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-authentications/authenticate`, {
    method: "POST",
    params
  });
}

export async function callAuthorize (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-authentications/authorize`, {
    method: "POST",
    params
  });
}

export async function callRefresh (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-authentications/refresh`, {
    method: "POST",
    params
  });
}
