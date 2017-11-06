import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10002";
const PROTOCOL = "https";

export async function callCreatePaymentSystem (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems`, {
    method: "POST",
    params
  });
}

export async function callRecoverPaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemovePaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentSystemById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems/${params.objectId}`, {
    method: "PATCH",
    params
  });
}

export async function callUpdatePaymentSystemIdentifierById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems/${params.objectId}/identifier`, {
    method: "PATCH",
    params
  });
}

export async function callUpdatePaymentSystemInitialBalanceById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-systems/${params.objectId}/initial-balance`, {
    method: "PUT",
    params
  });
}
