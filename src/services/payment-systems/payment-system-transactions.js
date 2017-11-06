import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10002";
const PROTOCOL = "https";

export async function callCreatePaymentSystemTransaction (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transactions`, {
    method: "POST",
    params
  });
}

export async function callRecoverPaymentSystemTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transactions/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemovePaymentSystemTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transactions/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentSystemTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transactions/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
