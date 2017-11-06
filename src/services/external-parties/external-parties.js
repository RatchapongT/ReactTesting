import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callActivateExternalPartyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}/activate`, {
    method: "PUT",
    params
  });
}

export async function callCreateExternalParty (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties`, {
    method: "POST",
    params
  });
}

export async function callDeactivateExternalPartyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}/deactivate`, {
    method: "PUT",
    params
  });
}

export async function callGetExternalPartyByUsername (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.username}`, {
    method: "GET",
    params
  });
}

export async function callRecoverExternalPartyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateExternalPartyUsernameById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.objectId}/username`, {
    method: "PUT",
    params
  });
}
