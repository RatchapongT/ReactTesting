import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callCreateUserPhoneNumber (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/phone-numbers`, {
    method: "POST",
    params
  });
}

export async function callGetUserPhoneNumbersByUserId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/phone-numbers`, {
    method: "GET",
    params
  });
}

export async function callRecoverUserPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/phone-numbers/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveUserPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/phone-numbers/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/phone-numbers/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
