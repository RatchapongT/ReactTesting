import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callActivateExternalPartyMalayPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/activate`, {
    method: "PUT",
    params
  });
}

export async function callDeactivateExternalPartyMalayPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/deactivate`, {
    method: "PUT",
    params
  });
}

export async function callGetExternalPartyMalayPropertiesByExternalPartyId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties`, {
    method: "GET",
    params
  });
}

export async function callRecoverExternalPartyMalayPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyMalayPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyMalayPropertyBalanceLimitById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/balance-limit`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyMalayPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateExternalPartyMalayPropertyCurrencyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/currency`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyMalayPropertyInitialBalanceById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/malay-properties/${params.objectId}/initial-balance`, {
    method: "PUT",
    params
  });
}
