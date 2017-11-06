import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callCreateExternalPartyLineUsername (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/line-usernames`, {
    method: "POST",
    params
  });
}

export async function callGetExternalPartyLineUsernamesByExternalPartyId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/line-usernames`, {
    method: "GET",
    params
  });
}

export async function callRecoverExternalPartyLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/line-usernames/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/line-usernames/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyLineUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/line-usernames/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
