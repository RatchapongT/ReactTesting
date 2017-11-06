import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10000";
const PROTOCOL = "https";

export async function callCreateUserRelationship (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-relationships`, {
    method: "POST",
    params
  });
}

export async function callDeleteUserRelationshipById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/user-relationships/${params.objectId}`, {
    method: "DELETE",
    params
  });
}
