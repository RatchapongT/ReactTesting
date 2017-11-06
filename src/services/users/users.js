import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callActivateUserById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/activate`, {
    method: "PUT",
    params
  });
}

export async function callCreateUser (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users`, {
    method: "POST",
    params
  });
}

export async function callDeactivateUserById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/deactivate`, {
    method: "PUT",
    params
  });
}

export async function callGetUserByUsername (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.username}`, {
    method: "GET",
    params
  });
}

export async function callGetUsers (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users`, {
    method: "GET",
    params
  });
}

export async function callRecoverUserById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveUserById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserAccountTypeById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/accountType`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateUserLanguageById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/language`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserPasswordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/password`, {
    method: "PUT",
    params
  });
}

export async function callUpdateUserUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.objectId}/username`, {
    method: "PUT",
    params
  });
}
