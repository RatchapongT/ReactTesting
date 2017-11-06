import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callCreateUserLineUsername (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/line-usernames`, {
    method: "POST",
    params
  });
}

export async function callGetUserLineUsernamesByUserId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/line-usernames`, {
    method: "GET",
    params
  });
}

export async function callRecoverUserLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/line-usernames/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveUserLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/line-usernames/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/line-usernames/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
