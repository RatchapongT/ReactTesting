import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10001";
const PROTOCOL = "https";

export async function callCreateExternalPartyPaymentSystem (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems`, {
    method: "POST",
    params
  });
}

export async function callGetExternalPartyPaymentSystemsByExternalPartyId (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems`, {
    method: "GET",
    params
  });
}

export async function callPrimarizeExternalPartyPaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems/${params.primarize}`, {
    method: "PUT",
    params
  });
}

export async function callRecoverExternalPartyPaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemoveExternalPartyPaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdateExternalPartyPaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdateExternalPartyPaymentSystemIdentifierById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/external-parties/${params.externalPartyId}/payment-systems/${params.objectId}/identifier`, {
    method: "PATCH",
    params
  });
}
