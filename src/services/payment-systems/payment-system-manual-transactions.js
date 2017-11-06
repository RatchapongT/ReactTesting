import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10002";
const PROTOCOL = "https";

export async function callCreatePaymentSystemManualTransaction (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-manual-transactions`, {
    method: "POST",
    params
  });
}

export async function callRecoverPaymentSystemManualTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-manual-transactions/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemovePaymentSystemManualTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-manual-transactions/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentSystemManualTransactionById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-manual-transactions/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
