import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callActivateUserPermissionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/permissions/${params.objectId}/activate`, {
    method: "PUT",
    params
  });
}

export async function callDeactivateUserPermissionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/permissions/${params.objectId}/deactivate`, {
    method: "PUT",
    params
  });
}

export async function callGetUserPermissionsByUserId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/users/${params.userId}/permissions`, {
    method: "GET",
    params
  });
}
