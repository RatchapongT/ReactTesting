import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callCreateExternalPartyPhoneNumber (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/phone-numbers`, {
    method: "POST",
    params
  });
}

export async function callGetExternalPartyPhoneNumbersByExternalPartyId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/phone-numbers`, {
    method: "GET",
    params
  });
}

export async function callRecoverExternalPartyPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/phone-numbers/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/phone-numbers/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyPhoneNumberById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/phone-numbers/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
