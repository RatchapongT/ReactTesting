import request from "../../../utils/request";

const HOST = "13.228.183.88";
const PORT = "10003";
const PROTOCOL = "https";

export async function callClaimPaymentInRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-in-records/${params.objectId}/claim`, {
    method: "PUT",
    params
  });
}

export async function callCreatePaymentInRecord (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-in-records`, {
    method: "POST",
    params
  });
}

export async function callRemovePaymentInRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-in-records/${params.objectId}/remove`, {
    method: "PUT",
    params
  });
}

export async function callUnclaimPaymentInRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-in-records/${params.objectId}/unclaim`, {
    method: "PUT",
    params
  });
}

export async function callUpdatePaymentInRecordById (params) {
  return request(`${PROTOCOL}://${HOST}:${PORT}/api/central-sheet-records/payment-in-records/${params.objectId}`, {
    method: "PATCH",
    params
  });
}
