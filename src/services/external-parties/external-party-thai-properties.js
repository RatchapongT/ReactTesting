import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callActivateExternalPartyThaiPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/activate`, {
    method: "PUT",
    params
  });
}

export async function callDeactivateExternalPartyThaiPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/deactivate`, {
    method: "PUT",
    params
  });
}

export async function callGetExternalPartyThaiPropertiesByExternalPartyId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties`, {
    method: "GET",
    params
  });
}

export async function callRecoverExternalPartyThaiPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyThaiPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyThaiPropertyBalanceLimitById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/balance-limit`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyThaiPropertyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateExternalPartyThaiPropertyCurrencyById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/currency`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyThaiPropertyInitialBalanceById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/thai-properties/${params.objectId}/initial-balance`, {
    method: "PUT",
    params
  });
}
