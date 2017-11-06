import request from "../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10002";
const PROTOCOL = "https";

export async function callCreatePaymentSystemTransactionCategory (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transaction-categories`, {
    method: "POST",
    params
  });
}

export async function callRecoverPaymentSystemTransactionCategoryById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transaction-categories/${params.objectId}/recover`, {
    method: "PUT",
    params
  });
}

export async function callRemovePaymentSystemTransactionCategoryById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transaction-categories/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentSystemTransactionCategoryById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/payment-system-transaction-categories/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
